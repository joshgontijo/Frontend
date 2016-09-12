import React from 'react';

import Todo from './Todo.jsx';
import TodoStore from './flux/TodoStore'

import AppDispatcher from '../AppDispatcher'

export default class Todos extends React.Component {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        }
    }

    componentWillMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnMount() {
        //console.log("Unregistering component: " + this.subscriberId);
        //AppDispatcher.unregister(this.subscriberId);
        TodoStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    render() {
        const todoComponents = this.state.todos.map(function (todo) {
            return <Todo key={todo.id} todo={todo}/>
        });
        return (
            <div>
                {todoComponents}
            </div>
        )
    }
}