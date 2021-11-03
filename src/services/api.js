import axios from 'axios';

const api = axios.create({
    baseURL: 'https://weather.contrateumdev.com.br/api/weather/city'
})

export default api;