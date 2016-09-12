import EventEmitterBase from './../../EventEmitterBase'
import * as Constants from '../../Constants'

import AppDispatcher from '../../AppDispatcher'
import HistoryWebAPI from './HistoryWebAPI'

class HistoryStore extends EventEmitterBase {
    constructor() {
        //ref: http://stackoverflow.com/questions/32518102/passing-an-instance-method-to-super-with-es6-classes
        super((action) => this.handleEvent(action)); //register this function as listener
        this._history = {};
    }

    handleEvent(action) {
        switch (action.type) {
            case Constants.TODO_CREATED:
                this._create("ADD", action.data);
                break;
            case Constants.TODO_UPDATED:
                this._create("COMPLETED", action.data);
                break;
            case Constants.TODO_REMOVED:
                this._create("DELETED", action.data);
                break;
            case Constants.COMMAND_RESTORE_HISTORY:
                super.emitChange();
                break;
            //callback from API
            case Constants.HISTORY_CREATED:
                this._history[action.data.id] = action.data;
                super.emitChange();
                break;
        }
    }

    _create(type, todo) {
        console.log("HistoryStore.create - " + type);
        let history = {
            type: type,
            label: todo.text
        };
        HistoryWebAPI.create(history);
    }

    getAll() {
        console.log("HistoryStore.getAll");
        var array = [];
        for (var o in this._history) {
            array.push(this._history[o]);
        }
        return array;
    }
}

//register this class as listener
//bind is just so we can use this. inside handleEvent instead todoStore
//dispatcher.register(todoStore.handleEvent.bind(todoStore));
//window.dispatcher = dispatcher; //testing on browser
export default new HistoryStore;