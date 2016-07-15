var React = require('react');
var AppDispatcher = require('./AppDispatcher');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            text: ''
        };
    },
    submit: function (ev) {
        ev.preventDefault();
        console.log('Triggering...' + this.state.text);

        AppDispatcher.dispatch({
            actionType: 'SOME_ACTION',
            data: this.state.text
        });

    },
    updateInput: function (ev) {
        this.setState({
            text: ev.target.value
        });
    },
    render: function () {
        return <div>
            <h3>Header</h3>
            <form onSubmit={this.submit}>
                <input onChange={this.updateInput} value={this.state.text} type="text" placeholder="Your message"/>
                <input type="submit" value="Send"/>
            </form>
        </div>;
    }
});