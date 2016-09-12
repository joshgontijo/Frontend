import React from 'react';
import * as TodoActions from './flux/TodoActions'

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    createTodo(e) {
        e.preventDefault();
        TodoActions.create(this.state.text);
        this.setState({text: ''});
    }

    handleInput(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <form>
                <div class="row">
                    <div class="medium-10 columns">
                        <input type="text" onChange={this.handleInput.bind(this)} placeholder="Todo..."
                               value={this.state.text}></input>
                    </div>
                    <div class="medium-2 columns">
                        <a href="#" onClick={this.createTodo.bind(this)} class="button postfix">Submit</a>
                    </div>
                </div>
            </form>
        )
    }
}