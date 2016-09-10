import AppDispatcher from '../../AppDispatcher'
import * as Constants from '../../Constants'

/*
* Why is File is needed ?
* Because Components should not update Store directly... why ?
* Because multiple stores may want to listen to the same event, for example:
* Some 'TodoComponent' create a new 'TodoItem'
* It calls this 'createTodo', which dispaches the 'CREATE_TODO' event
* TodoStore is listening to this event, althought other stores may want to do something with this event too.
* _________
* When simply fetching data, we can call 'TodoStore' directly since it doesn't emit any event
* _________
* Flux actions add another layer, although worth having it in general
*/

export function restore(id) {
    AppDispatcher.dispatch({
        //type: Constants.CREATE_TODO,
        //text: text
    })
}
