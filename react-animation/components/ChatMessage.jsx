var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({

    render: function () {
        return (
            <p>{this.props.message}</p>
        )
    }
});