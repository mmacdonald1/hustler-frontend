import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer'
import Profile from './components/Profile'
import './App.css';
import {Router, Route, Redirect} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/profile" render={()=> <Profile currentUser={this.state.currentUser}/>}
          <Route exact path="/login" render={()=>this.state.currentUser?
            <Redirect to='/profile'/> :
            <HomeContainer updateCurrentUser={this.updateCurrentUser} />
          }
        </div>
      </Router>
    );
  }
}

export default App;
