import React, { Component } from 'react';
// import axios from 'axios';

class Review extends Component {
    buttonClick = () =>{
        console.log('Button Click in Review');
        this.props.history.push('/Submit'); //XXXXXXXXXX CHANGE THIS MAYBE
      }

  render() {  
    return (
      <div className="Feeling">
        <h1>Review Your Feedback</h1>
        
        
     <button onClick={this.buttonClick}>Submit</button>
        <br/>
        <br/>
      </div>
     
    );
  }
}

export default Review;
