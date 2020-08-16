import {
    CREATE_JOB,
    CREATE_JOB_FAIL,
    VIEW_JOB_FAIL,
    VIEW_JOB
} from '../actions/types';

const initialState = {
    jobs: [],
    job: {},
    error: ''
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_JOB:
            return { ...state, job: payload }
        case CREATE_JOB_FAIL:
            return { ...state, error: payload }
        case VIEW_JOB:
            return { ...state, job: payload, error: '' }
        case VIEW_JOB_FAIL:
            return { ...state, error: payload }
        default:
            return state;
    }
}
