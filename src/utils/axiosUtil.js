/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token || undefined
    }
});


export default {
    postData: (URL, data) =>
        axiosInstance({
            'method': 'POST',
            'url': URL,
            'data': data,

        }),
        getData: (URL) =>
            axiosInstance({
                'method': 'GET',
                'url': URL
            }), 
            putData: (URL, data) =>
            axiosInstance({
                'method': 'PUT',
                'url': URL,
                'data': data,
    
            }), 
}
