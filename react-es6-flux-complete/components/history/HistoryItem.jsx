import React from 'react';

export default class History extends React.Component {
    revert(e) {
        e.preventDefault();
    }

    render() {
        let color;
        switch (this.props.item.type) {
            case "ADD":
                color = "green";
                break;
            case "COMPLETED":
                color = "blue";
                break;
            case "DELETED":
                color = "red";
                break;
        }
        return (
            <div class="row">
                <div class="small-10 columns">
                    <b style={{color: color}}>{this.props.item.type}</b> <i>{this.props.item.label}</i>
                </div>
                <div class="small-2 columns">
                    <a href="#" class="text-right"><i class="fa fa-reply-all"></i></a>
                </div>
            </div>
        )
    }
}