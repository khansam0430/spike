import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

state={
    feeling:''
}
 
    handleChangeFor = (event, typeofChange) => {
        this.setState({
            feeling: event.target.value
            },
        );
    }

    //adding function to link this components next button to the next component
    //dispatch answer to redux store
    buttonClick = () =>{
       if (this.state.feeling===''){alert('Answer must be selected');return};
        
        this.props.dispatch({
            type:'SET_FEELING',
            payload:this.state.feeling
        })
        this.props.history.push('/understanding')

    }

    render() {

        return (
            <div>
                <h1>How are you feeling today?</h1>
                <h5><i>Feeling?</i></h5>
                 {/* adding a drop down */}
                <select id="feeling" name="feeling" onChange={this.handleChangeFor}>
                    <option value="0"></option>
                    <option value="1">1 - Stressed Out</option>
                    <option value="2">2  </option>
                    <option value="3">3  </option>
                    <option value="4">4 </option>
                    <option value="5">5 - I feel Fantastic</option>
                </select>
                 {/* button will run the buttonClick function and take us to the next component */}
                <button className="nextButton" onClick={this.buttonClick}>Next</button>
              </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);