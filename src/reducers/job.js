import {
    CREATE_JOB,
    CREATE_JOB_FAIL,
} from '../actions/types';

const initialState = {
    jobs: [],
    job: {},
    isAuthenticated: true,
    error: ''
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_JOB:
            return { ...state, job: payload }
        case CREATE_JOB_FAIL:
            return { ...state, error: payload }
        default:
            return state;
    }
}
