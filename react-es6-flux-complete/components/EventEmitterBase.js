import { EventEmitter } from 'events';
import AppDispatcher from './AppDispatcher';


export default class EventEmitterBase extends EventEmitter {
    constructor(handler) {
        super();
        if(handler === undefined){
            throw Error('A handler callback must be provided');
        }
        if (typeof handler !== "function") {
            throw Error('Handler is not a function');
        }
        AppDispatcher.register(handler);
    }

    /*
     *  Commom function to register Views to the Stores
     */
    addChangeListener(callback) {
        this.on(EventEmitterBase.EMIT_CHANGE, callback);
    }

    /*
     *  Commom function to unregister Views to the Stores
     */
    removeChangeListener(callback) {
        this.removeListener(EventEmitterBase.EMIT_CHANGE, callback);
    }

    /*
     *  Commom function to notify changes, using Node's EventEmitter
     */
    emitChange() {
        //EMIT CHANGE EVENT
        console.log("Emitting EventEmitter's 'change'");
        this.emit(EventEmitterBase.EMIT_CHANGE);
    }
}

EventEmitterBase.EMIT_CHANGE = "change";

