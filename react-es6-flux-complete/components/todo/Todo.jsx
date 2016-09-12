import React from 'react';
import * as TodoActions from './flux/TodoActions'

export default class Todo extends React.Component {
    remove(e) {
        e.preventDefault();
        TodoActions.remove(this.props.todo);
    }

    complete(e) {
        e.preventDefault();
        TodoActions.update(this.props.todo.id, {completed: true});
    }

    render() {
        let completed = this.props.todo.completed ?
            <li></li>
            : (<li><a href="#" onClick={this.complete.bind(this)}><i class="fa fa-check"></i></a></li>);
        return (
            <div class="row">
                <div class="small-10 columns">
                    {this.props.todo.text}
                </div>
                <div class="small-2 columns">
                    <ul class="todo-actions">
                        <li><a href="#" onClick={this.remove.bind(this)}><i class="fa fa-times"></i></a></li>
                        {completed}
                    </ul>
                </div>
            </div>
        )
    }
}