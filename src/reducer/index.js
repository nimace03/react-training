import { combineReducers } from 'redux';
import app from '../Containers/App/reducer';
import user from '../Containers/User/reducer';
import post from '../Containers/Posts/reducer';

export const rootReducer = combineReducers({
    app,
    user,
    post,
});