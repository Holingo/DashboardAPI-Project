import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/users';

export const listUsers = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createUser = (user) => {
    return axios.post(REST_API_BASE_URL, user);
}