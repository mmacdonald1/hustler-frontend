import React, {Component, Fragment} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import DeckCard from '../components/DeckCard'
import UserJumbotron from '../components/UserJumbotron'
import CreateDeckModal from '../components/CreateDeckModal'
import { connect } from 'react-redux';



class Profile extends Component{
  constructor() {
      super();
      this.state = {
        show: false,
        currentDeck:null
      };
  }

    handleClose = () => {
      this.setState({ show: false });
    }

    handleShow = () => {
      this.setState({ show: true });
    }
    handleEditForm = (deck) => {
      this.setState({ show: true, currentDeck: deck });
    }

render(){
  let {currentUser, currentUserDecks} = this.props
  return(
    currentUser.username ? (
      <Fragment>
          <div>
            <UserJumbotron handleShow={this.handleShow}/>
            {currentUserDecks ? currentUserDecks.map(deck => <DeckCard key={deck.id} deck={deck} handleEditForm={this.handleEditForm} />) : null}

            <CreateDeckModal show={this.state.show} currentDeck={this.state.currentDeck} handleClose={this.handleClose} />

          </div>
      </Fragment>
    ) : (
       <Redirect to='/login'/>
    )

  )
}
}

const mapStateToProps = state =>{
  console.log(state)
  return({
    currentUser: state.users,
    currentUserDecks: state.decks
  })
}

export default withRouter(connect(mapStateToProps)(Profile))
