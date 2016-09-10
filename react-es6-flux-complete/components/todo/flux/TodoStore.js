import EventEmitterBase from './../../EventEmitterBase'
import * as Constants from '../../Constants'

import AppDispatcher from '../../AppDispatcher'

class TodoStore extends EventEmitterBase {
    constructor() {
        //ref: http://stackoverflow.com/questions/32518102/passing-an-instance-method-to-super-with-es6-classes
        super((action) => this.handleEvent(action)); //register this function as listener
        this.todos = []
    }

    handleEvent(action) {
        console.log("TodoStore => received action", action);

        switch (action.type) {
            case Constants.CREATE_TODO:
                this.create(action.text);
                break;
            case Constants.DELETE_TODO:
                this.remove(action.id);
                break;
            case Constants.UPDATE_TODO:
                this.update(action.id, action.newState);
        }
    }

    create(text) {
        this.todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        super.emitChange();

        //AppDispatcher.dispatch({
        //    type: 'TODO_CREATED',
        //    text: text
        //})

    }

    update(id, newState) {
        this.todos = this.todos.filter(function (todo) {
            if(todo.id === id){
                todo = Object.assign(todo, newState);
            }
            return todo;
        });
        super.emitChange();
    }

    remove(id) {
        this.todos = this.todos.filter(function (todo) {
            return todo.id !== id;
        });
        super.emitChange();
    }


    getAll() {
        return this.todos;
    }
}

//register this class as listener
//bind is just so we can use this. inside handleEvent instead todoStore
//dispatcher.register(todoStore.handleEvent.bind(todoStore));
//window.dispatcher = dispatcher; //testing on browser
export default new TodoStore;