import React, { Component, Fragment } from 'react';
import HomeContainer from './containers/HomeContainer'
import Profile from './components/Profile'
import MainNav from './components/MainNav'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser:""
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

        this.setState({currentUser: data.user.username})
      })
    }
  }

  updateCurrentUser= (user) =>{
    this.setState({currentUser:user})
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({currentUser:null})
  }

  render() {
    return (
      <BrowserRouter>
          <Fragment>
            <MainNav logged_in={!!this.state.currentUser} logout = {this.logout}/>
            <Switch>
              <Route exact path="/profile" render={()=> <Profile currentUser={this.state.currentUser}/>} />
              <Route exact path="/login" render={()=>this.state.currentUser?
                <Redirect to='/profile'/> :
                <HomeContainer updateCurrentUser={this.updateCurrentUser} />
              }
              />
            </Switch>
          </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
