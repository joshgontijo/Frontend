import React from 'react';

export default class Todo extends React.Component {
    render(){
        return (
            <div class="row">
                <div class="small-10 columns">
                    Sample Todo
                </div>
                <div class="small-2 columns">
                    <a href="#">Delete</a>
                </div>
            </div>
        )
    }
}