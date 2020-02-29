import React, { Component } from 'react';
// import axios from 'axios';

class Feeling extends Component {
    //adding function to link this components next button to the next component
    buttonClick = () =>{
        console.log('Button Click in Feeling');
        this.props.history.push('/understanding');
      }

  render() {  
    return (
      <div className="Feeling">
        <h1>How are you feeling today?</h1>
        <h5><i>Feeling?</i></h5>
        {/* adding a drop down */}
        <select>
            <option>1 (I'm very Stressed)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5 (I feel Fantastic)</option>
        </select> 
        {/* button will run the buttonClick function and take us to the next component */}
        <button className="nextButton" onClick={this.buttonClick}>Next</button>
        <br/>
        <br/>
      </div>
     
    );
  }
}

export default Feeling;
