import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_ALERT,
} from './types';
import { toast } from 'react-toastify';

export const createUserAccount = ({ firstName, lastName, email, password, phoneNumber, userTypeId }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ firstName, lastName, email, password, phoneNumber, userTypeId });
    try {
        const res = await axios.post('https://freelancerz-app.herokuapp.com/api/user/auth/signup', body, config);
        const data = res.data;
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        });
        toast.success('Account created successfully');
    } catch (error) {
        if (error.response.data) {
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
