import React from 'react';
import HistoryItem from './HistoryItem.jsx';
import HistoryStore from './flux/HistoryStore';

export default class History extends React.Component {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {
            items: HistoryStore.getAll()
        }
    }

    componentWillMount() {
        //this.subscriberId = AppDispatcher.register(this._onChange);
        //console.log("Registering component: " + this.subscriberId);

        HistoryStore.addChangeListener(this._onChange);

    }

    componentWillUnMount() {
        //console.log("Unregistering component: " + this.subscriberId);
        //AppDispatcher.unregister(this.subscriberId);
        HistoryStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        //console.log('Todos._onChange', action);
        this.setState({
            items: HistoryStore.getAll()
        });
    }

    render() {
        var items = this.state.items.map(function (item) {
            return <HistoryItem key={item.id} item={item}/>
        });

        return (
            <div class="small-12 columns">
                <div class="row">
                    <div class="large-12 columns">
                        <div class="callout primary ">
                            <p class="text-center">History</p>
                        </div>
                    </div>
                </div>
                {items}
            </div>

        )
    }
}