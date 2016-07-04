var React = require('react');

var ChatMessage = require('./ChatMessage');
var Header = require('./Header');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            messages: []
        };
    },

    submit: function (ev) {
        ev.preventDefault();

        var newMessage = <ChatMessage message={this.state.text}/>;

        this.setState({
            messages: this.state.messages.concat([newMessage]),
            text: ''
        });
    },

    updateInput: function (ev) {
        this.setState({
            text: ev.target.value
        });
    },

    render: function () {
        return <div>
            <div>
                <Header />
                {this.state.messages}
            </div>
            <form onSubmit={this.submit}>
                <input onChange={this.updateInput} value={this.state.text} type="text" placeholder="Your message"/>
                <input type="submit" value="Send"/>
            </form>
        </div>;
    }
});