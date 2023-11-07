import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://food-explorer-back-b3j8.onrender.com/',
    withCredentials: true
})