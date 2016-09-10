import React from 'react';

export default class History extends React.Component {
    revert(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div class="row">
                <div class="small-10 columns">
                    <b>{this.props.item.type}</b> <i>{this.props.item.text}</i>
                </div>
                <div class="small-2 columns">
                    <a href="#" class="text-right"><i class="fa fa-reply-all"></i></a>
                </div>
            </div>
        )
    }
}