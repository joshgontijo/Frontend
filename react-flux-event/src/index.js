var ReactDOM = require('react-dom');
var React = require('react');

var Header = require('./Header');
var Footer = require('./Footer');

var AppEvent = {};

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);
ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);