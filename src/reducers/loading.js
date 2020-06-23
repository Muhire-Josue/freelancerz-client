import { SET_LOADING, STOP_LOADING } from '../actions/types';

const initialState = {
    loading: false
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}