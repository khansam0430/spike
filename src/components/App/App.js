import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

//importing all of the components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';

class App extends Component {
  // no get required...just do a post on the review page--send everything to redux store instead

  // componentDidMount = ()=> {
  //   console.log('in component did mount');
  
  // }

  render() {
    return (
     
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* Creating a seperate router section for clarity and organization */}
        <Router>
          <Route exact path="/" component={Feeling}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/supported" component={Supported}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/review" component={Review}/>
          <Route exact path="/submit" component={Submit}/>
        </Router>
      </div>
    );
  }
}

export default App;
