import {applyMiddleware, createStore} from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk"; //async stuff

import reducers from './reducers';

//middleware
const middleware = applyMiddleware(reduxThunk, reduxLogger());

export default createStore(reducers, middleware);