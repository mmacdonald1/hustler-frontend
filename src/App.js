import React, { Component, Fragment } from 'react';
import Profile from './containers/Profile'
import MainNav from './components/MainNav'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import Login from './components/Login'
import DeckPage from './containers/DeckPage'
import Quiz from './containers/Quiz'
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser} from './redux/actions/users';


class App extends Component {

  componentDidMount(){
    let token = localStorage.getItem('token')
    //see if there is a token send it to the backend
    console.log("component did mount")
    if(token){
    this.props.getUser(token)
    }
  }

  render() {
    console.log("!!!", this.props.currentUser)
    console.log(!!this.props.currentUser, Object.keys(this.props.currentUser))
    return (
      <BrowserRouter>
          <Fragment>
             <MainNav />
            <Switch>
              <Route exact path="/" render={()=>this.props.currentUser.username?
                <Redirect to='/profile'/> :
                <Signup />
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
              <Route exact path="/profile" render={()=> <Profile />} />
              <Route exact path="/login" render={()=>this.props.currentUser.username?
                <Redirect to='/profile'/> :
                <Login />
              }
              />
              <Route exact path="/quiz" render={()=>this.props.currentUser.username?
                <Quiz /> :
                <Redirect to='/profile'/>
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
    getUser: (token) => {dispatch(getUser(token))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
