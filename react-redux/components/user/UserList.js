import React from "react";
import {connect} from "react-redux";
import {fetchUsers} from "./UserActions";
import {fetchTweets} from "../tweet/TweetActions";

@connect((store)=> {
    return {
        users: store.users.users, //main store -> users store -> users field
        tweets: store.tweets.tweets
    }
})
export default class TodoList extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUsers());
        this.props.dispatch(fetchTweets());
    }

    render() {
        var userItems = this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });

        var tweetItems = this.props.tweets.map(tweet => {
            return <li key={tweet.id}>{tweet.text}</li>
        });

        console.log(this.props);
        return (<div>
                <h1>Users</h1>
                <ul>
                    {userItems}
                </ul>
                <h1>Tweets</h1>
                <ul>
                    {tweetItems}
                </ul>
            </div>
        )

    }
}