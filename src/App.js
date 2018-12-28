import React, { Component, Fragment } from 'react';
import Profile from './containers/Profile'
import MainNav from './components/MainNav'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser:null,
      currentUserDecks:null
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    //see if there is a token send it to the backend
    console.log("component did mount")
    if(token){
      console.log("in if")
      fetch('http://localhost:3000/profile',{
        method:"GET",
        headers:{
          "Authentication" : `Bearer ${token}`
        }
      }).then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({currentUser: data.user})
        this.setState({currentUserDecks: data.decks})
      })
    }
  }

  updateCurrentUser= (user, decks) =>{
    this.setState({currentUser:user, currentUserDecks:decks})
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({currentUser:null})
  }
  createDeck = (deck) => {
    console.log("the deck is here!", deck)
    let copyCreateDeck = this.state.currentUserDecks
    copyCreateDeck.push(deck)
    console.log("did the thing", copyCreateDeck)
  }

  updateCurrentDecks = (deck) => {
    let index = this.state.currentUserDecks.findIndex(i => i.id === deck.id)
    let copyDeck = this.state.currentUserDecks
    copyDeck.splice(index, 1, deck)
    this.setState({currentUserDecks: copyDeck})
  }

  deleteDeck = (deck) => {
    let indexDelete = this.state.currentUserDecks.findIndex(i => i.id === deck.id)
    let copyDeleteDeck = this.state.currentUserDecks
    copyDeleteDeck.splice(indexDelete, 1)
    this.setState({currentUserDecks: copyDeleteDeck})
  }

  render() {
    return (
      <BrowserRouter>
          <Fragment>
            <MainNav logged_in={!!this.state.currentUser} logout = {this.logout}/>
            <Switch>
              <Route exact path="/" render={()=>this.state.currentUser?
                <Redirect to='/profile'/> :
                <Signup updateCurrentUser={this.updateCurrentUser} />
              }
              />
              <Route exact path="/profile" render={()=> <Profile currentUser={this.state.currentUser} currentUserDecks={this.state.currentUserDecks} updateCurrentDecks={this.updateCurrentDecks} deleteDeck={this.deleteDeck} createDeck={this.createDeck}/>} />
              <Route exact path="/login" render={()=>this.state.currentUser?
                <Redirect to='/profile'/> :
                <Login updateCurrentUser={this.updateCurrentUser}/>
              }
              />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
