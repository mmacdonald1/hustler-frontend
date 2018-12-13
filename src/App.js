import React, { Component } from 'react';
import HomeContainer from './containers/HomeContainer'
import Profile from './components/Profile'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    //see if there is a token send it to the backend
    if(token){
      fetch('http://localhost:3000/profile',{
        method:"GET",
        headers:{
          "Authentication" : `Bearer ${token}`
        }
      }).then(resp => resp.json())
      .then(data => {
        this.setState({
          currentUser: data.user
        })
      })
    }
  }

  updateCurrentUser= (user) =>{
    this.setState({currentUser:user})
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/profile" render={()=> <Profile currentUser={this.state.currentUser}/>} />
            <Route exact path="/login" render={()=>this.state.currentUser?
              <Redirect to='/profile'/> :
              <HomeContainer updateCurrentUser={this.updateCurrentUser} />
            }
            />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
