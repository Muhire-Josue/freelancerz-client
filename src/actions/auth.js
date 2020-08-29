import axios from 'axios';
import axiosUtil from '../utils/axiosUtil';
import { toast } from 'react-toastify';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_ALERT,
    REGISTER_START,
} from './types';

const { postData } = axiosUtil;
export const createUserAccount = ({ firstName, lastName, email, password, phoneNumber, userTypeId }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ firstName, lastName, email, password, phoneNumber, userTypeId });
    try {
        dispatch({ type: REGISTER_START });
        const res = await axios.post(`http://localhost:3000/api/auth/signup`, body, config);
        const data = res.data;
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        });
        toast.success(data.message);
    } catch (error) {
        if (error?.response?.data) {
            dispatch({ type: REGISTER_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: REGISTER_FAIL, payload: error.message });
            dispatch({ type: SET_ALERT, payload: { type: 'error', msg: error.message } });
        } else {
            console.error('Internal error', error)
        }
    }
};

export const login = ({ email, password }) => async dispatch => {
    localStorage.token = '';
    const body = JSON.stringify({ email, password });
    try {
        // const res = await axios.post(`http://localhost:3000/api/auth/login`, body, config);
        const res = await postData('/api/auth/login', body);
        const data = res.data;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        });
        toast.success(data.message);

    } catch (error) {
        if (error.response.data) {
            dispatch({ type: LOGIN_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: LOGIN_FAIL, payload: error.message });
            toast.error(error.message)
        } else {
            toast.error('Internal error');
        }
    }
}
