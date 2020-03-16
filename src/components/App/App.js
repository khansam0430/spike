import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


//importing all of the components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
        <div className="nav">
        <button className="button"><NavLink exact to="/" activeClassName="active">Feeling Page</NavLink></button><br/>
        <br/>
        <button className="button"><NavLink exact to="/understanding" activeClassName="active">Understanding Page</NavLink></button>
        </div>
        </header>

        <Route render={({location})=> (
 <TransitionGroup>
 <CSSTransition
     key={location.key}
     timeout={500}
     classNames="fade"
     >
 {/* Creating a seperate router section for clarity and organization */}
 <Switch location={location}>
   <Route exact path="/" component={Feeling}/>
   <Route exact path="/understanding" component={Understanding}/>
 </Switch>
 </CSSTransition>
 </TransitionGroup>

        )}/>
       
      </div>
    );
  }
}

export default App;
