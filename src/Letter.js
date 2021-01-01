
import React from 'react'
import createClass from 'create-react-class';
function IClicked(event) { 

   alert(event.currentTarget.textContent)
      
}
const Letters = createClass({
    render: function () { 
        var Styles = {
            backgroundColor: this.props.bgcolor,
        }
        return (
            <div className="Myletters" style={ Styles} onClick={IClicked} >
                {this.props.children}
            </div>
        )
    }
})

export { Letters, IClicked }