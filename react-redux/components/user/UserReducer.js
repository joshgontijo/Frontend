export default function (state = {
    users: [],
    fetching: false

}, action) {
    //DO NOT MUTATE STATE
    switch (action.type) {
        case "FETCH_USERS_STARTED": {
            return Object.assign({}, state, {fetching: true});
        }
        case "USERS_RECEIVED": {
            state.users.concat(action.data);
            return Object.assign({}, state, {fetching: false}, {users: action.data});
        }
        case "FETCH_USERS_ERROR": {
            return Object.assign({}, state, {fetching: false});
        }
    }
    return state;
};
