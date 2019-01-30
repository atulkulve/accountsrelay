import {combineReducers} from 'redux';
import postReducer from './postReducers';

import postRelayReducers from "../relay/redux/reducers/postRelayReducers";

export default combineReducers({
    postsdemo: postReducer,
    postsrelay: postRelayReducers
});