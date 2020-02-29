import React, { Component } from 'react';
// import axios from 'axios';

class Supported extends Component {

    buttonClick = () =>{
        console.log('Button Click in Supported');
        this.props.history.push('/comments');
      }
  render() {
    return (
      <div className="Supported">
        <h1>How well are you being supported?</h1>
        <h5><i>Support?</i></h5>
        <select>
            <option>1 (I feel abandoned)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5 (I feel Supported!)</option>
        </select>
        <button onClick={this.buttonClick}>Next</button>
        <br/>
      </div>
     
    );
  }
}

export default Supported;
