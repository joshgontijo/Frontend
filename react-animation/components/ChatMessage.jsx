var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

module.exports = React.createClass({

    render: function () {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={700}>

                <h3>{this.props.message}</h3>
            </ReactCSSTransitionGroup>
        )
    }
});