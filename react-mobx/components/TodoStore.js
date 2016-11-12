import {autorun, computed, observable} from "mobx";

class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false
    }
}

class TodoHistory {
    type;
    label;
    id;

    constructor(type, label) {
        this.type = type;
        this.label = label;
        this.id = Date.now();
    }
}

class TodoStore {
    @observable todos = [];
    @observable filter = "";
    @observable history = [];

    @computed
    get filteredTodos() {
        var matchesFilter = new RegExp(this.filter, "i");
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo(value) {
        let todo = new Todo(value);
        this.todos.push(todo);
        this.history.push(new TodoHistory("CREATED", value));
    }

    toggleCompleted(todo) {
        var found = this.todos[this.todos.indexOf(todo)];
        found.complete = !found.complete;
        let type = found.complete ? "DONE" : "TODO";
        this.history.push(new TodoHistory(type, found.value));
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);

        const completeTodos = this.todos.filter(todo => todo.complete);
        const labels = completeTodos.map(todo => {
           return todo.value;
        });

        this.history.push(new TodoHistory("CLEAR_COMPLETED", JSON.stringify(labels)));
        this.todos.replace(incompleteTodos);
    }
}
var store = window.store = new TodoStore;
export default store;
