import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import SpinnerComponent from "../components/SpinnerComponent";
import {
  fetchUserProfile,
  resetProfile,
} from "../features/profile/profileSlice";
import {
  updateProfile,
  resetUpdateProfile,
} from "../features/profile/profileUpdateSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const {
    profile = {},
    isLoading: profileLoading,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.profile) || {};
  const {
    isLoading: updateLoading,
    isSuccess: updateSuccess,
    message: updateMessage,
  } = useSelector((state) => state.profileUpdate) || {};

  const [showModal, setShowModal] = useState(false);
  // const [updatedProfileData, setUpdatedProfileData] = useState({
  //   username: '',
  //   email: '',
  //   first_name: '',
  //   last_name: '',
  //   city: '',
  //   country: '',
  //   postal_code: '',
  //   about_me: '',
  // });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [about_me, setAbout_me] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfile());
    return () => {
      dispatch(resetProfile());
    };
  }, [dispatch]);

  useEffect(() => {
    if (profile && isSuccess) {
      // Update the state with profile data on initial load and after successful update
      setUsername(profile.username);
      setEmail(profile.email);
      setFirst_name(profile.first_name);
      setLast_name(profile.last_name);
      setCity(profile.city);
      setCountry(profile.country);
      setPostal_code(profile.postal_code);
      setAbout_me(profile.about_me);
    }
  }, [profile, isSuccess]);

  useEffect(() => {
    // Handle profile update success
    if (updateSuccess) {
      // Optionally, you can fetch the updated profile again
      dispatch(fetchUserProfile());
      // Reset the update profile state
      toast.success("Profile updated successfully!");
      dispatch(resetUpdateProfile());
    }
  }, [updateSuccess, dispatch]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "first_name":
        setFirst_name(value);
        break;
      case "last_name":
        setLast_name(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "postal_code":
        setPostal_code(value);
        break;
      case "about_me":
        setAbout_me(value);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = {
      username,
      email,
      first_name,
      last_name,
      city,
      country,
      postal_code,
      about_me,
    };
    dispatch(updateProfile(profileData));
    setShowModal(false);
  };

  if (profileLoading || updateLoading === undefined) {
    // Handle the loading state or return an error component
    return <SpinnerComponent />;
  }

  if (isError) {
    // Handle error (show toast, redirect, etc.)
    toast.error(`Error: ${message}`);
    return null; // or render an error component
  }

  return (
    <>
      <div className="container">
        <div className="main-body">
          {/* Breadcrumb */}

          {/* /Breadcrumb */}
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={profile?.profile_photo || ""}
                      alt="Admin"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>{profile?.full_name || ""}</h4>
                      <p className="text-secondary mb-1">Relator</p>
                      <p className="text-muted font-size-sm">
                        {profile?.city || ""}, {profile?.country || ""}
                      </p>
                      {/* <button className="btn btn-primary mr-4">Follow</button>
                  {" "}
                  <button className="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={2} y1={12} x2={22} y2={12} />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Website
                    </h6>
                    <span className="text-secondary">https://bootdey.com</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Github
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter mr-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                      Twitter
                    </h6>
                    <span className="text-secondary">@bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </h6>
                    <span className="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profile?.first_name || ""}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profile?.last_name || ""}
                    </div>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profile?.email || ""}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profile?.phone_number || ""}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">About Me</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {profile?.about_me || ""}
                    </div>
                  </div>
                  <hr />

                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Button
                        className="btn btn-info "
                        onClick={handleOpenModal}
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: 5 }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="col-lg-12 mb-5 mb-lg-0">
              <div className="card mt-0">
                <div className="card-body py-0 px-md-5">
                  <h1 className="fw-bold text-center">Update Profile</h1>
                  <div className="row">
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        Username
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Email Address
                      </label>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="first_name"
                          value={first_name}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="last_name"
                          value={last_name}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="city"
                          value={city}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          City
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="country"
                          value={country}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Country
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <textarea
                          name="about_me"
                          value={about_me}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          About Me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfilePage;
