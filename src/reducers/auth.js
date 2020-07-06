import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_START,
} from '../actions/types';

const initialState = {
    token: '',
    isAuthenticated: false,
    error: '',
    loading: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                error: '',
                loading: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                error: payload.error,
                isAuthenticated: false,
                token: '',
                loading: false
            }
        default:
            return state;
    }
}
