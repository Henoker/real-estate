from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .exceptions import NotYourProfile, ProfileNotFound
from .models import Profile
from .renderers import ProfileJSONRenderer
from .serializers import ProfileSerializer, UpdateProfileSerializer


class AgentListAPIView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Profile.objects.filter(is_agent=True)
    serializer_class = ProfileSerializer


"""
    from rest_framework import api_view, permissions

    @api_view(["GET"])
    @permission_classes((permissions.IsAuthenticated))
    def get_all_agents(request):
        agents = Profile.objects.filter(is_agent=True)
        serializer=ProfileSerializer(agents, many=True)
        name_spaced_response={"agents": serializer.data}
        return Response(name_spaced_response,status=status.HTTP_200_OK)
"""


class TopAgentsListAPIView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Profile.objects.filter(top_agent=True)
    serializer_class = ProfileSerializer


class GetProfileAPIView(APIView):
    permission_classes = [permissions.AllowAny]
    renderer_classes = [ProfileJSONRenderer]

    def get(self, request, username):
        try:
            user_profile = Profile.objects.get(user__username=username)
        except Profile.DoesNotExist:
            raise ProfileNotFound

        serializer = ProfileSerializer(user_profile, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)



class UpdateProfileAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, username):
        try:
            return Profile.objects.get(user__username=username)
        except Profile.DoesNotExist:
            raise ProfileNotFound

    def patch(self, request, username):
        profile = self.get_object(username)
        self.check_object_permissions(request, profile)

        data = request.data
        serializer = UpdateProfileSerializer(instance=profile, data=data, partial=True)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, username):
        profile = self.get_object(username)
        self.check_object_permissions(request, profile)

        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)