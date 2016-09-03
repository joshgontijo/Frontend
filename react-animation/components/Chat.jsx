var React = require('react');

var ChatMessage = require('./ChatMessage');
var Header = require('./Header');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var index = 0;

module.exports = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            messages: []
        };
    },

    submit: function (ev) {
        ev.preventDefault();

        var message = <ChatMessage key={index++} message={this.state.text}/>;

        this.setState({
            messages: this.state.messages.concat([message]),
            text: ''
        });
    },
    updateInput: function (ev) {
        this.setState({
            text: ev.target.value
        });
    },

    render: function () {
        return (
            <div>
                <Header />
                {this.state.messages}
                <input onChange={this.updateInput} value={this.state.text} type="text" placeholder="Your message"/>
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
});