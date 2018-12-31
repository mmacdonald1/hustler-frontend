import React, { Component, Fragment } from 'react';
import Profile from './containers/Profile'
import MainNav from './components/MainNav'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import Login from './components/Login'
import DeckPage from './containers/DeckPage'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import {setUser} from './redux/actions/users';
import {setDecks} from './redux/actions/decks';

class App extends Component {

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
        console.log(data, data.user, data.user.decks)
        this.props.setDecks(data.user.decks)
        this.props.setUser(data.user)
      })
    }
  }

  updateCurrentUser= (user, decks) =>{
    // this.setState({currentUser:user, currentUserDecks:decks})
  }

  logout = () => {
    localStorage.removeItem('token')
    // this.setState({currentUser:null})
  }

  updateCurrentDecks = (deck) => {
    let index = this.props.currentUserDecks.findIndex(i => i.id === deck.id)
    let copyDeck = this.props.currentUserDecks
    copyDeck.splice(index, 1, deck)
    // this.setState({currentUserDecks: copyDeck})
  }

  render() {
    console.log("!!!", typeof(this.props.currentUser))
    console.log(!!this.props.currentUser, Object.keys(this.props.currentUser))
    return (
      <BrowserRouter>
          <Fragment>
             <MainNav logged_in={!!this.props.currentUser.username} logout = {this.logout}/>
            <Switch>
              <Route exact path="/" render={()=>this.props.currentUser.username?
                <Redirect to='/profile'/> :
                <Signup updateCurrentUser={this.updateCurrentUser} />
              }
              />
              <Route exact path='/decks/:id' render={(props)=>{
                  if(this.props.currentUser.username){
                    let deckId = parseInt(props.match.params.id)
                    let deck = this.props.currentUserDecks.find(i => i.id === deckId)
                    return <DeckPage deck={deck}/>
                  }else{
                    return <Redirect to='/profile'/>
                  }
                }
              }/>
              <Route exact path="/profile" render={()=> <Profile updateCurrentDecks={this.updateCurrentDecks}  />} />
              <Route exact path="/login" render={()=>this.props.currentUser.username?
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
  console.log(state, state.users, state.decks)
  return({
    currentUser: state.users,
    currentUserDecks: state.decks
  })
}
const mapDispatchToProps= dispatch => {
  return({
    setUser: (user) => dispatch(setUser(user)),
    setDecks: (decks) => dispatch(setDecks(decks))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
