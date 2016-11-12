import React from "react";
var ReactDOM = require('react-dom');

import {Provider} from "react-redux";
import store from "./store";

import UserList from './user/UserList'

const app = document.getElementById("app");

//Provider must wrap ghe root app element
ReactDOM.render(
    <Provider store={store}>
        <UserList />
    </Provider>, app);




// store.dispatch({type: "NAME_CHANGED", data: {name: "Josh"}});
// store.dispatch({type: "AGE_CHANGED", data: {age: 27}});
