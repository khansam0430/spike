import React, { Component } from 'react';
import {connect} from 'react-redux';


class Submit extends Component {
    //adding function to link this components next button to the home component
    buttonClick = () =>{
        console.log('Button Click in Submit');
        this.props.history.push('/'); //takes us back to the homepage
      }

  render() {  
    return (
      <div className="Submit">
        <h1>Thank You!</h1>
        
        {/* button will run the buttonClick function and take us back to the first component */}
        <button className="nextButton" onClick={this.buttonClick}>Leave New Feedback</button>
        <br/>
        <br/>
      </div>
     
    );
  }
}

export default connect()(Submit);
