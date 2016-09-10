import EventEmitterBase from './../../EventEmitterBase'
import * as Constants from '../../Constants'

import AppDispatcher from '../../AppDispatcher'

class HistoryStore extends EventEmitterBase {
    constructor() {
        //ref: http://stackoverflow.com/questions/32518102/passing-an-instance-method-to-super-with-es6-classes
        super((action) => this.handleEvent(action)); //register this function as listener
        this.history = []
    }

    handleEvent(action) {
        console.log("HistoryStore => received action", action);

        switch (action.type) {
            case Constants.CREATE_TODO:
                this.create("ADD", action.text);
                break;
            case Constants.DELETE_TODO:
                this.create("DELETE", action.text);
                break;
            case Constants.UPDATE_TODO:
                this.create("COMPLETED", action.text);
        }
    }

    create(type, text) {
        this.history.push({
            id: Date.now(),
            type: type,
            date: new Date(),
            text: text
        });
        super.emitChange();
    }

    getAll() {
        return this.history;
    }
}

//register this class as listener
//bind is just so we can use this. inside handleEvent instead todoStore
//dispatcher.register(todoStore.handleEvent.bind(todoStore));
//window.dispatcher = dispatcher; //testing on browser
export default new HistoryStore;