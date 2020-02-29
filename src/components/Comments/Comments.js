import React, { Component } from 'react';
// import axios from 'axios';

class Comments extends Component {
    buttonClick = () =>{
        console.log('Button Click in Comments');
        this.props.history.push('/review');
      }

  render() {  
    return (
      <div className="Comments">
        <h1>Any comments you want to leave?</h1>
        <h5><i>Comments:?</i></h5>
        <input placeholder="Leave Comments"/>
     <button onClick={this.buttonClick}>Next</button>
        <br/>
        <br/>
      </div>
     
    );
  }
}

export default Comments;
