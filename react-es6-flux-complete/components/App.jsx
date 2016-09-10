import React from 'react';
import Header from './Header.jsx';
import Input from './Input.jsx';
import Todos from './Todos.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div class="small-4 small-centered columns">
                <div class="row">
                    <Header />
                </div>
                <div class="row">
                    <Todos />
                </div>
                <hr />
                <div class="row">
                    <Input />
                </div>
            </div>
        )
    }
}