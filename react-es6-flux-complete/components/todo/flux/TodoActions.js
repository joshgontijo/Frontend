import AppDispatcher from '../../AppDispatcher';
import * as Constants from '../../Constants';
import TodoWebAPI from './TodoWebAPI'


/*
 * Why is File is needed ?
 * Because Components should not update Store directly... why ?
 * Because multiple stores may want to listen to the same event, for example:
 * Some 'TodoComponent' create a new 'TodoItem'
 * It calls this 'createTodo', which dispaches the 'CREATE_TODO' event
 * TodoStore is listening to this event, althought other stores may want to do something with this event too.
 * _________
 * When simply fetching data, view calls 'TodoStore' directly since it doesn't emit any event
 * _________
 *
 * Ajax requests
 * ref: http://stackoverflow.com/questions/26632415/where-should-ajax-request-be-made-in-flux-app
 *
 * READ REQUESTS (GET): Put on Store
 * WRITE REQUESTS (POST, PUT, DELETE): Put them here
 *
 */

export function create(text) {
    AppDispatcher.dispatch({
        type: Constants.COMMAND_CREATE_TODO,
        data: text
    });
    TodoWebAPI.create(text);
}

export function remove(todo) {
    AppDispatcher.dispatch({
        type: Constants.COMMAND_REMOVE_TODO,
        data: todo
    });
    TodoWebAPI.remove(todo);
}

export function update(id, newState) {
    AppDispatcher.dispatch({
        type: Constants.COMMAND_UPDATE_TODO,
        data: id,
        newState: newState
    });
    TodoWebAPI.update(id, newState);
}

