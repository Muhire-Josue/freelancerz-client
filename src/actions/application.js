import axiosUtil from '../utils/axiosUtil';
import { toast } from 'react-toastify';
import {
APPLY_SUCCESS,
APPLY_FAIL,
VIEW_APPLICATIONS,
VIEW_APPLICATIONS_FAIL
} from './types';

const { postData } = axiosUtil;

export const jobApplication = application => async dispatch => {
    try {
        const body = JSON.stringify({id: application});
        const res = await postData('/api/job/apply', body);
        const { data } = res.data;
        dispatch({
            type: APPLY_SUCCESS,
            payload: data
        });
        toast.success(res.data.message);
    } catch (error) {
        if (error?.response?.data) {
            dispatch({ type: APPLY_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: APPLY_FAIL, payload: error.message });
            toast.error(error.message);
        } else {
            console.error('Internal error', error)
        }
    }
}

export const viewJobApplications = applicationId => async dispatch => {
    try {
        const body = JSON.stringify({id: applicationId});
        const res = await postData('/api/job/applications', body);
        const {data} = res.data;
        dispatch({
            type: VIEW_APPLICATIONS,
            payload: data
        });
    } catch (error) {
        if (error?.response?.data) {
            dispatch({ type: VIEW_APPLICATIONS_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: VIEW_APPLICATIONS_FAIL, payload: error.message });
            toast.error(error.message);
        } else {
            console.error('Internal error', error)
        }
    }
}
