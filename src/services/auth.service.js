import axios from "axios";
import { useEffect } from "react";

const API_URL = "http://localhost:8080/api/auth/";
const register = (firstname, lastname, phone, dni, birthdate, address, email, password) => {
  return axios.post(API_URL + "signup", {
    firstname,
    lastname,
    phone,
    dni,
    birthdate,
    address,
    email,
    password,
  });
};
const getUserById = (id) => {
  return axios.get(API_URL + "user/" + id);
}


const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getUserById,
};
export default AuthService;