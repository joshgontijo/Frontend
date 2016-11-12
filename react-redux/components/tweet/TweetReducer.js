export default function (state = {
    tweets: [],
    fetching: false
}, action) {
    //DO NOT MUTATE STATE
    switch (action.type) {
        case "FETCH_TWEETS_STARTED": {
            return Object.assign({}, state, {fetching: true});
        }
        case "TWEETS_FETCHED": {
            return Object.assign({}, state, {fetching: false}, {tweets: action.data});
        }
        case "FETCH_TWEETS_ERROR": {
            return Object.assign({}, state, {fetching: false});
        }
    }
    return state;
};
