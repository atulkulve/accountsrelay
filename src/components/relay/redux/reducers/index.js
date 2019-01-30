import { combineReducers } from "redux";
import postRelayReducers from "./postGenericReducers";

export default combineReducers({
    postsrelay: postRelayReducers
})
