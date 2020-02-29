import React, { Component } from 'react';
// import axios from 'axios';

class Comments extends Component {
    //adding function to link this components next button to the next component
    buttonClick = () =>{
        console.log('Button Click in Comments');
        this.props.history.push('/review');
      }

  render() {  
    return (
      <div className="Comments">
        <h1>Any comments you want to leave?</h1>
        <h5><i>Comments:?</i></h5>
         {/* adding an input section */}
        <input placeholder="Leave Comments Here"/>
        {/* button will run the buttonClick function and take us to the next component */}
        <button className="nextButton" onClick={this.buttonClick}>Next</button>
        <br/>
        <br/>
      </div>
     
    );
  }
}

export default Comments;
