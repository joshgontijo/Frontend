export function fetchTweets() {
    return { //no ajax
        type: "TWEETS_FETCHED",
        data: [
            {id: 1, text: "Tweet 1"},
            {id: 2, text: "Tweet 2"}
        ]
    }
}
