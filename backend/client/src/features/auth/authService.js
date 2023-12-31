import axios from 'axios';

const REGISTER_URL = "http://localhost:8000/api/v1/auth/users/";
const LOGIN_URL = "http://localhost:8000/api/v1/auth/jwt/create/";
const ACTIVATE_URL = "http://localhost:8000/api/v1/auth/users/activation/";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Register user
const register = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(REGISTER_URL, userData, config);
  return response.data;
};

// Login user
const login = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(LOGIN_URL, userData, config);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    setAuthToken(response.data.access); // Set the JWT token in the headers
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
  setAuthToken(null); // Remove the JWT token from the headers
};

const activate = async (userData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(ACTIVATE_URL, userData, config);
  return response.data;
};

const authService = { register, login, logout, activate };

export default authService;
