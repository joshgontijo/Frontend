var ReactDOM = require('react-dom');
var React = require('react');

var Chat = require('./Chat');
var Diagram = require('./Diagram');

ReactDOM.render(
    <Chat />,
    document.getElementById('app')
);
ReactDOM.render(
    <Diagram />,
    document.getElementById('diagram')
);