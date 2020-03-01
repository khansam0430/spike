import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Comments extends Component {

  state={
      comments:''
  }
 
    handleChangeFor = (event, typeofChange) => {
        this.setState({
            comments: event.target.value
            },
        );
    }

    //adding function to link this components next button to the next component
    //dispatch answer to redux store
    buttonClick = () =>{
        this.props.dispatch({
            type:'SET_COMMENTS',
            payload:this.state.comments
        })
        this.props.history.push('/review')

    }
 //including a back button which takes user back to previous page
    backClick = () =>{
      this.props.history.push('/supported')
    }

    render() {
        return (
            <div>
                <h1>Would you like to leave Comments?</h1>
                <h5><i>Comment:</i></h5>
                 {/* text area for comments */}
                 {/* added a button for back click and calling it here. Added materail UI  */}
                 <Button variant="contained" color="secondary" className="backButton" onClick={this.backClick}>Previous</Button>
                 <textarea rows="5" cols="50" id="comments" onChange={this.handleChangeFor} placeholder="write comments here"/>
                 {/* button will run the buttonClick function and take us to the next component */}
                 <Button variant="contained" color="primary" className="nextButton" onClick={this.buttonClick}>Next</Button>
              </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comments);