import React, { Component } from 'react';
// import axios from 'axios';

class Review extends Component {
    //adding function to link this components next button to the home component
    buttonClick = () =>{
        console.log('Button Click in Review');
        this.props.history.push('/submit'); //takes us back to the homepage
      }

  render() {  
    return (
      <div className="Feeling">
        <h1>Review Your Feedback</h1>
        <p>Feelings: </p>
        <p>Understanding: </p>
        <p>Support: </p>
        <p>Comments: </p>
        
        {/* button will run the buttonClick function and take us back to the first component */}
        <button className="nextButton" onClick={this.buttonClick}>Submit</button>
        <br/>
        <br/>
      </div>
     
    );
  }
}

export default Review;
