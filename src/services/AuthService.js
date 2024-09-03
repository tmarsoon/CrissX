import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const register = (email, password) => {
    return axios.post(API_URL + 'register', {
        email,
        password
    });
};

const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email,
        password
    });
};

const AuthService = {
    register,
    login
};

export default AuthService;