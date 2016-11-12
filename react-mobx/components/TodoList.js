import React from "react";
import {observer} from "mobx-react";


@observer
export default class TodoList extends React.Component {
    createNew(e) {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value);
            e.target.value = ""
        }
    }

    filter(e) {
        this.props.store.filter = e.target.value
    }

    toggleComplete(todo) {
        this.props.store.toggleCompleted(todo);
    }

    render() {
        const {clearComplete, filter, filteredTodos, todos, history} = this.props.store;

        const todoList = filteredTodos.map(todo => (
            <li key={todo.id}>
                <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete}
                       checked={todo.complete}/>
                <span>{todo.value}</span>
            </li>
        ));

        const historyItems = history.map(item => (
           <li key={item.id}>{item.type} - {item.label}</li>
        ));


        return <div>
            <h1>Todos</h1>
            <div>
                <input onKeyPress={this.createNew.bind(this)}/>
                <input value={filter} onChange={this.filter.bind(this)}/>
                <ul>{todoList}</ul>
                <a href="#" onClick={clearComplete}>Clear Complete</a>
            </div>
            <div>
                <ul>{historyItems}</ul>
            </div>
        </div>
    }
}