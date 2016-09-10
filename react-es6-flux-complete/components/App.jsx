import React from 'react';
import Header from './Header.jsx';
import Input from './todo/Input.jsx';
import Todos from './todo/Todos.jsx';
import History from './history/History.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div class="small-6 small-centered columns">
                <div class="small-8 columns">
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
                <div class="small-4 columns">
                    <div class="row">
                        <History />
                    </div>
                </div>
            </div>
        )
    }
}