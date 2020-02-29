import React, { Component } from 'react';
// import axios from 'axios';



class Understanding extends Component {
    //adding function to link this components next button to the next component
    buttonClick = () =>{
        console.log('Button Click in Understanding');
        this.props.history.push('/supported');
      }
  render() {
    return (
      <div className="Feeling">
        <h1>How well are you understanding the content?</h1>
        <h5><i>Understanding?</i></h5>
         {/* adding a drop down */}
        <select>
            <option>1 (I'm Lost)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5 (I feel like a Pro)</option>
        </select>
        {/* button will run the buttonClick function and take us to the next component */}
        <button className="nextButton" onClick={this.buttonClick}>Next</button>
        <br/>

      </div>
    );
  }
}

export default Understanding;
