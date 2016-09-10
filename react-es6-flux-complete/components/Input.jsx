import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <form>
                <div class="row">
                    <div class="medium-10 columns">
                        <input type="text" placeholder="Name"></input>
                    </div>
                    <div class="medium-2 columns">
                        <a href="#" class="button postfix">Submit</a>
                    </div>
                </div>
            </form>
        )
    }
}