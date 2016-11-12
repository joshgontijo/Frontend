import axios from 'axios';
import AppDispatcher from '../../AppDispatcher'
import * as Constants from '../../Constants'

class TodoWebAPI {

    getAll() {
        axios.get(Constants.ROOT + '/todos', {text: text})
            .then(function (response) {
                AppDispatcher.dispatch({
                    type: Constants.COMMAND_TODOS_RECEIVED,
                    data: response.data
                })
            })
            .catch(function (error) {
                TodoWebAPI._handleError(error);
            });
    }

    create(text) {
        axios.post(Constants.ROOT + '/todos', {text: text})
            .then(function (response) {
                AppDispatcher.dispatch({
                    type: Constants.TODO_CREATED,
                    data: response.data
                })
            })
            .catch(function (error) {
                TodoWebAPI._handleError(error);
            });
    }

    remove(todo) {
        axios.delete(Constants.ROOT + '/todos/' + todo.id)
            .then(function (response) {
                try {
                    console.log("Removed");
                    AppDispatcher.dispatch({
                        type: Constants.TODO_REMOVED,
                        data: todo
                    })
                }catch(e){
                    console.error(e.stack);
                }
            })
            .catch(function (error) {
                console.log("Error");
                TodoWebAPI._handleError(error);
            });
    }

    update(id, newState) {
        axios.put(Constants.ROOT + '/todos/' + id, newState)
            .then(function (response) {
                AppDispatcher.dispatch({
                    type: Constants.TODO_UPDATED,
                    data: response.data
                })
            })
            .catch(function (error) {
                TodoWebAPI._handleError(error);
            });
    }

    static _handleError(error) {
        console.log(":: ERROR ON HTTP REQUEST ::", error);
        if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            AppDispatcher.dispatch({
                type: Constants.TODO_HTTP_ERROR,
                data: response.data
            })
        }
        else {
            // Something happened in setting up the request that triggered an Error
            console.log(error.stack);
        }
    }
}

export default new TodoWebAPI;

