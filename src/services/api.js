import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://food-explorer-back-6pvd.onrender.com',
    withCredentials: true
})