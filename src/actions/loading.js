import {
    SET_LOADING,
    STOP_LOADING
} from './types';

export const loading = isLoading => dispatch => {
    if (isLoading) {
        dispatch({
            type: SET_LOADING
        });
    } else {
        dispatch({
            type: STOP_LOADING
        });
    }
}