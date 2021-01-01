import React from 'react'
import createClass from 'create-react-class'
const Squer = createClass({
    render: function () {
        return (
            <div className="squreStyle">
                <h1>Hello</h1>
            </div>
        );
    }
});
const Label = createClass({
    render: function () {
        return (
            <div className="colorLabel">
                <h1>Color</h1>
           </div>
        );
    }
});

const Card = createClass({
    render: function () {
        return (
            <div className="cardStyle">
                <Squer />
                <Label />
           </div>    
        );
    }
});
export {Squer, Label, Card}