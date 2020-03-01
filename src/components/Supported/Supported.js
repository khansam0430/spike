import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {

state={
    supported:''
}
 
    handleChangeFor = (event, typeofChange) => {
        this.setState({
            supported: event.target.value
            },
        );
    }

    //adding function to link this components next button to the next component
    //dispatch answer to redux store
    buttonClick = () =>{
       if (this.state.supported===''){alert('Answer must be selected');return};
        
        this.props.dispatch({
            type:'SET_SUPPORTED',
            payload:this.state.supported
        })
        this.props.history.push('/comments')

    }

    render() {
        return (
            <div>
                <h1>Do you feel supported?</h1>
                <h5><i>Supported?</i></h5>
                 {/* adding a drop down */}
                <select id="supported" name="supported" onChange={this.handleChangeFor}>
                    <option value="0"></option>
                    <option value="1">1 - I feel alone</option>
                    <option value="2">2  </option>
                    <option value="3">3  </option>
                    <option value="4">4 </option>
                    <option value="5">5 - Supported</option>
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

export default connect(putReduxStateOnProps)(Supported);