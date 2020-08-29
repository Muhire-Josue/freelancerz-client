import { combineReducers } from 'redux';
import auth from './auth';
import job from './job';
import application from './application';
export default combineReducers({
    auth,
    job,
    application,
});
