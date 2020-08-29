import {
    APPLY_SUCCESS,
    APPLY_FAIL
} from '../actions/types';

const initialState = {
    application: {},
    applications: [],
    error: ''
}

export default function (state=initialState, action){
    const { payload, type } = action;
    switch(type){
        case APPLY_SUCCESS:
            return { ...state, application: payload };
        case APPLY_FAIL:
            return{ ...state, error: payload }
        default:
            return state;
    }
}