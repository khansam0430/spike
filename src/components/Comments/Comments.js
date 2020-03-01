import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    render() {
        return (
            <div>
                <h1>Would you like to leave Comments?</h1>
                <h5><i>Comment:</i></h5>
                 {/* text area for comments */}
                 <input onChange={this.handleChangeFor} placeholder="write comments here"/>
                 {/* button will run the buttonClick function and take us to the next component */}
                <button className="nextButton" onClick={this.buttonClick}>Next</button>
              </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comments);