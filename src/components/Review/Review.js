import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Review extends Component {
    //created data object to send object which holds all the info from the redux store.
    //adding axios post to button click
    buttonClick = () =>{
      let objectToSend = {
        feeling: this.props.reduxState.feeling,
        understanding: this.props.reduxState.understanding,
        supported: this.props.reduxState.supported,
        comments: this.props.reduxState.comments,
      }
         axios({
          method: 'POST',
          url: '/feedback',
          data: objectToSend
        }).then((response)=>{
          console.log('response from POST', response);
          this.props.dispatch({
            type: 'NEW_FEEDBACK'
          }) //disptaching to set_review which will allow the reducers to clear out for the next feedback.
          this.props.history.push('/submit'); //takes us to the submit page
        }).catch((error)=> {
          console.log('ERROR submitting Feedback', error);
        })

    }
 //including a back button which takes user back to previous page
    backClick = () =>{
      this.props.history.push('/comments')
    }

    render() {  
      return (
        <div className="Review">
          <h1><i>Review Your Feedback</i></h1>
          <p>Feelings: {this.props.reduxState.feeling} </p>
          <p>Understanding: {this.props.reduxState.understanding}</p>
          <p>Support: {this.props.reduxState.supported}</p>
          <p>Comments: {this.props.reduxState.comments}</p>
          <Button variant="contained" color="secondary" className="backButton" onClick={this.backClick}>Previous</Button>
        <span id="span"></span>
         {/* button will run the buttonClick function and take us back to the first component */}
         <Button variant="contained" color="primary" className="nextButton" onClick={this.buttonClick}>Submit</Button>
          <br/>
          <br/>
         </div>
     
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Review);