var React = require('react');
var dagre = require('dagre');
var cytoscape = require('cytoscape');
var cydagre = require('cytoscape-dagre');

var data = require('./data.json');

cydagre(cytoscape, dagre); // register extension

module.exports = React.createClass({
    getInitialState: function () {
        return {
            data: data,
            id: 1
        };
    },
    componentDidMount: function () {
        var that = this;
        var cy = cytoscape({
            container: document.getElementById('cy'),

            boxSelectionEnabled: false,
            autounselectify: true,

            layout: {
                name: 'dagre'
            },

            style: [
                {
                    selector: 'node',
                    style: {
                        'content': 'data(id)',
                        'text-opacity': 0.5,
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'background-color': '#11479e'
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'width': 1,
                        'target-arrow-shape': 'triangle',
                        'line-color': '#9dbaea',
                        'target-arrow-color': '#9dbaea',
                        'curve-style': 'bezier'
                    }
                }
            ],

            elements: that.state.data
        });

        this.setState({cy: cy});

    },
    addElement: function (e) {
        e.preventDefault();
        var cy = this.state.cy;
        var id = this.state.id;
        cy.add([
            {group: "nodes", data: {id: id}},
            {group: "edges", data: {id: id + '_edge', source: "n0", target: id}}
        ]);
        this.setState({id: id + 1 });
    },
    render: function () {
        return <div>
            <button onClick={this.addElement}>Add Element</button>
            <div id="cy" style={{width: '100%', height: '100%', position: 'absolute'}}></div>
        </div>;
    }
});