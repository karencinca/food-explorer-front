import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://food-explorer-back-z2nv.onrender.com',
    withCredentials: true
})