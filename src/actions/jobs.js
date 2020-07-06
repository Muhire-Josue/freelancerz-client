import { toast } from 'react-toastify';
import axiosUtil from '../utils/axiosUtil';

import {
    CREATE_JOB,
    CREATE_JOB_FAIL,
} from './types';

const { postData } = axiosUtil;

export const createJob = job => async dispatch => {
    try {
        const body = JSON.stringify(job);
        // const res = await axios.post(`http://localhost:3000/api/jobs`, body,);
        const res = await postData('/api/jobs', body);
        dispatch({
            type: CREATE_JOB,
            payload: res.data
        });
        toast.success(res.data.message);

    } catch (error) {
        if (error?.response?.data) {
            dispatch({ type: CREATE_JOB_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: CREATE_JOB_FAIL, payload: error.message });
            toast.error(error.message);
        } else {
            console.error('Internal error', error)
        }
    }

}
