import {combineReducers } from "redux";
import userReducer from './user/UserReducer';
import tweetsReducer from './tweet/TweetReducer';


//combiner
export default combineReducers({
    users: userReducer,
    tweets: tweetsReducer
});
