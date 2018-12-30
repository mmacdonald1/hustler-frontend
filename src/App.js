import React, { Component, Fragment } from 'react';
import Profile from './containers/Profile'
import MainNav from './components/MainNav'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import Login from './components/Login'
import DeckPage from './containers/DeckPage'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {

  // componentDidMount(){
  //   let token = localStorage.getItem('token')
  //   //see if there is a token send it to the backend
  //   console.log("component did mount")
  //   if(token){
  //     console.log("in if")
  //     fetch('http://localhost:3000/profile',{
  //       method:"GET",
  //       headers:{
  //         "Authentication" : `Bearer ${token}`
  //       }
  //     }).then(resp => resp.json())
  //     .then(data => {
  //       console.log(data)
  //       // this.setState({currentUser: data.user})
  //       // this.setState({currentUserDecks: data.decks})
  //     })
  //   }
  // }

  updateCurrentUser= (user, decks) =>{
    // this.setState({currentUser:user, currentUserDecks:decks})
  }

  logout = () => {
    localStorage.removeItem('token')
    // this.setState({currentUser:null})
  }
  createDeck = (deck) => {
    console.log("the deck is here!", deck)
    let copyCreateDeck = this.props.currentUserDecks
    copyCreateDeck.push(deck)
    console.log("did the thing", copyCreateDeck)
  }

  updateCurrentDecks = (deck) => {
    let index = this.props.currentUserDecks.findIndex(i => i.id === deck.id)
    let copyDeck = this.props.currentUserDecks
    copyDeck.splice(index, 1, deck)
    // this.setState({currentUserDecks: copyDeck})
  }

  deleteDeck = (deck) => {
    let indexDelete = this.props.currentUserDecks.findIndex(i => i.id === deck.id)
    let copyDeleteDeck = this.props.currentUserDecks
    copyDeleteDeck.splice(indexDelete, 1)
    // this.setState({currentUserDecks: copyDeleteDeck})
  }

  render() {
    return (
      <BrowserRouter>
          <Fragment>
             <MainNav logged_in={!!this.props.currentUser} logout = {this.logout}/>
            <Switch>
              <Route exact path="/" render={()=>this.props.currentUser?
                <Redirect to='/profile'/> :
                <Signup updateCurrentUser={this.updateCurrentUser} />
              }
              />
              <Route exact path='/decks/:id' render={(props)=>{
                  if(this.props.currentUser){
                    let deckId = parseInt(props.match.params.id)
                    let deck = this.props.currentUserDecks.find(i => i.id === deckId)
                    return <DeckPage deck={deck}/>
                  }else{
                    return <Redirect to='/profile'/>
                  }
                }
              }/>
              <Route exact path="/profile" render={()=> <Profile updateCurrentDecks={this.updateCurrentDecks} deleteDeck={this.deleteDeck} createDeck={this.createDeck}/>} />
              <Route exact path="/login" render={()=>this.props.currentUser?
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

const mapStateToProps = state =>{
  console.log(state)
  return({
    currentUser: state.users.currentUser,
    currentUserDecks: state.users.currentUserDecks
  })
}

export default connect(mapStateToProps)(App);
