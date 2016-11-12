import axios from 'axios';
import AppDispatcher from '../../AppDispatcher'
import * as Constants from '../../Constants'

class HistoryWebAPI {
    getAll() {
        axios.get(Constants.ROOT + '/history', {text: text})
            .then(function (response) {
                AppDispatcher.dispatch({
                    type: Constants.HISTORIES_RECEIVED,
                    data: response.data
                })
            })
            .catch(function (error) {
                this._handleError(error);
            });
    }

    create(historyItem) {
        axios.post(Constants.ROOT + '/history', historyItem)
            .then(function (response) {
                AppDispatcher.dispatch({
                    type: Constants.HISTORY_CREATED,
                    data: response.data
                })
            })
            .catch(function (error) {
                this._handleError(error);
            });
    }

    _handleError(error) {
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
            console.log('Error', error.message);
        }
    }
}

export default new HistoryWebAPI;

