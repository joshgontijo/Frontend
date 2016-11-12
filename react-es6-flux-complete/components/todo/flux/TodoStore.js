import EventEmitterBase from './../../EventEmitterBase'
import * as Constants from '../../Constants'

var _todos = {};

class TodoStore extends EventEmitterBase {
    constructor() {
        //ref: http://stackoverflow.com/questions/32518102/passing-an-instance-method-to-super-with-es6-classes
        super((action) => this.handleEvent(action)); //register this function as listener
    }

    handleEvent(action) {
        switch (action.type) {
            case Constants.TODO_CREATED:
                this._create(action.data);
                break;
            case Constants.TODO_UPDATED:
                this._update(action.data.id, action.data);
                break;
            case Constants.TODO_REMOVED:
                this._remove(action.data);
                break;
        }
    }

    _create(todo) {
        console.log("TodoStore._create");
        _todos[todo.id] = todo;
        super.emitChange();
    }

    _update(id, newState) {
        console.log("TodoStore._update");
        _todos[id] = Object.assign(_todos[id], newState);
        super.emitChange();
    }

    _remove(todo) {
        console.log("TodoStore._remove");
        delete _todos[todo.id];
        super.emitChange();
    }

    getAll() {
        console.log("TodoStore.getAll");
        var array = [];
        for (var o in _todos) {
            array.push(_todos[o]);
        }
        return array;
    }
}

//register this class as listener
//bind is just so we can use this. inside handleEvent instead todoStore
//dispatcher.register(todoStore.handleEvent.bind(todoStore));
//window.dispatcher = dispatcher; //testing on browser
export default new TodoStore;