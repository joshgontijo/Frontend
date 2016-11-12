import axios from 'axios';

export function fetchUsers() {
    return function(dispatch) { //thunk
        dispatch({type: "FETCH_USERS_STARTED"});
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then((response) => {
                dispatch({type: "USERS_RECEIVED", data: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_USERS_ERROR", data: error});
            })
    }
}

export function setUsername(name) {
    return {
        type: "NAME_CHANGED",
        data: {
            name: name
        }
    }
}