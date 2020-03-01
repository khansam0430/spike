import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Understanding extends Component {

state={
    understanding:''
}
 
    handleChangeFor = (event, typeofChange) => {
        this.setState({
            understanding: event.target.value
            },
        );
    }

    //adding function to link this components next button to the next component
    //dispatch answer to redux store
    buttonClick = () =>{
       if (this.state.understanding===''){alert('Answer must be selected');return};
        
        this.props.dispatch({
            type:'SET_UNDERSTANDING',
            payload:this.state.understanding
        })
        this.props.history.push('/supported')

    }
    //including a back button which takes user back to previous page
    backClick = () =>{
      this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>How well did you understand today's material?</h1>
                <h5><i>Understanding?</i></h5>
                 {/* adding a drop down */}
                 {/* added a button for back click and calling it here. Added materail UI  */}
                 <Button variant="contained" color="secondary" className="backButton" onClick={this.backClick}>Previous</Button>
                <select id="understanding" name="understanding" onChange={this.handleChangeFor}>
                    <option value="0"></option>
                    <option value="1">1 - I feel lost</option>
                    <option value="2">2  </option>
                    <option value="3">3  </option>
                    <option value="4">4 </option>
                    <option value="5">5 - I'm a Pro</option>
                </select>
                 {/* button will run the buttonClick function and take us to the next component */}
                 <Button variant="contained" color="primary" className="nextButton" onClick={this.buttonClick}>Next</Button>
              </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);