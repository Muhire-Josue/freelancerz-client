import {
    APPLY_SUCCESS,
    APPLY_FAIL,
    VIEW_APPLICATIONS,
    VIEW_APPLICATIONS_FAIL
} from '../actions/types';

const initialState = {
    application: {},
    applications: [],
    error: ''
}

export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case APPLY_SUCCESS:
            return { ...state, application: payload };
        case APPLY_FAIL:
        case VIEW_APPLICATIONS_FAIL:
            return { ...state, error: payload };
        case VIEW_APPLICATIONS:
            return { ...state, applications: payload };
        default:
            return state;
    }
}