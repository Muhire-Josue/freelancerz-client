import { toast } from 'react-toastify';
import axiosUtil from '../utils/axiosUtil';
import {
    CREATE_JOB,
    CREATE_JOB_FAIL,
    VIEW_JOB,
    VIEW_JOB_FAIL,
    VIEW_JOBS,
    VIEW_JOBS_FAIL,
} from './types';

const { postData, getData } = axiosUtil;

export const createJob = (job, history) => async dispatch => {
    try {
        const body = JSON.stringify(job);
        const res = await postData('/api/jobs', body);
        const { data } = res.data;
        dispatch({
            type: CREATE_JOB,
            payload: data
        });
        toast.success(res.data.message);
        history.push(`/job/${data.id}`);
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

export const GetJob = id => async dispatch => {
    try {
        const jobId = { id };
        const res = await postData('/api/job/view', jobId);
        const { data } = res.data;
        dispatch({
            type: VIEW_JOB,
            payload: data
        })
    } catch (error) {
        if (error?.response?.data) {
            dispatch({ type: VIEW_JOB_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: VIEW_JOB_FAIL, payload: error.message });
            toast.error(error.message);
        } else {
            console.error('Internal error', error)
        }
    }
}

export const GetAllJobs = () => async dispatch =>{
    try {
        const res = await getData('/api/jobs?status=opened');
        const { data } = res.data;
        dispatch({
            type: VIEW_JOBS,
            payload: data
        });
    } catch (error) {
        if (error?.response?.data) {
            dispatch({ type: VIEW_JOBS_FAIL, payload: error.response.data });
            toast.error(error.response.data.error);
        } else if (error.message) {
            dispatch({ type: VIEW_JOBS_FAIL, payload: error.message });
            toast.error(error.message);
        } else {
            console.error('Internal error', error)
        }
    }
}
