import React, { Component } from 'react';
// import axios from 'axios';

class Supported extends Component {
//adding function to link this components next button to the next component
    buttonClick = () =>{
        console.log('Button Click in Supported');
        this.props.history.push('/comments');
      }
  render() {
    return (
      <div className="Supported">
        <h1>How well are you being supported?</h1>
        <h5><i>Support?</i></h5>
         {/* adding a drop down */}
        <select>
            <option>1 (I feel abandoned)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5 (I feel Supported!)</option>
        </select>
        {/* button will run the buttonClick function and take us to the next component */}
        <button className="nextButton" onClick={this.buttonClick}>Next</button>
        <br/>
      </div>
     
    );
  }
}

export default Supported;
