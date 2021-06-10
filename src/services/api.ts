import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3334' //colocar a porta do backend
});

export default api;