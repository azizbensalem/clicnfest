import axios from "axios";

const register = (username, email, password) => {
    return axios.post("/register", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post("/login", {
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