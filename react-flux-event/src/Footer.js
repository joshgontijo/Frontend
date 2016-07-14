var React = require('react');
var AppDispatcher = require('./AppDispatcher');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            data: 'Nothing...'
        };
    },
    componentDidMount: function () {
        var that = this;
        AppDispatcher.register(function (action) {
            switch(action.actionType) {
                case 'SOME_ACTION':
                    console.log('>>>>>' + JSON.stringify(action));
                    that.setState({
                        data: action.data
                    });
                    break;
                default:
            }
        })
    },
    render: function () {
        return <div>
            <h3>Footer</h3>
            <p>{this.state.data}</p>
        </div>;
    }
});