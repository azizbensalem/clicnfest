import axios from "axios";

const register = (firstName, lastName, username, email, password) => {
  return axios.post("http://localhost:56407/api/Users/adduser", {
      firstName: firstName,
      lastName: lastName,
      userName: username,
      email: email,
      password: password,
    });
};

const login = (username, password) => {
    return axios
      .post("http://localhost:56407/api/Users/authenticate", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
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

export default {
    register,
    login,
    logout,
    getCurrentUser,
};