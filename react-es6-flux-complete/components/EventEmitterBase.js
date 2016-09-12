import { EventEmitter } from 'events';
import AppDispatcher from './AppDispatcher';

export default class EventEmitterBase extends EventEmitter {
    constructor(handler) {
        super();
        if (handler === undefined) {
            throw Error('A handler callback must be provided');
        }
        if (typeof handler !== "function") {
            throw Error('Handler is not a function');
        }
        this.subscriberId = AppDispatcher.register(handler);
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
        this.emit(EventEmitterBase.EMIT_CHANGE);
    }

    getSubscriberId() {
        return this.subscriberId;
    }
}

EventEmitterBase.EMIT_CHANGE = "change";

