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
        editDeck:null
      };
  }

    handleClose = () => {
      this.setState({ show: false });
    }

    handleShow = () => {
      this.setState({ show: true });
    }
    handleEditForm = (deck) => {
      this.setState({ show: true, editDeck: deck });
    }

render(){
  let {currentUser, currentUserDecks} = this.props
  return(
    <Fragment>
      { currentUser ? (
        <div>

          <UserJumbotron handleShow={this.handleShow}/>
          {currentUserDecks ? currentUserDecks.map(deck => <DeckCard key={deck.id} deck={deck} handleEditForm={this.handleEditForm} deleteDeck={this.props.deleteDeck} />) : null}

          <CreateDeckModal show={this.state.show} editDeck={this.state.editDeck} handleClose={this.handleClose} updateCurrentDecks={this.props.updateCurrentDecks} createDeck={this.props.createDeck}/>

        </div>
        ):(
          <Redirect to='/login'/>
        )
      }
    </Fragment>
  )
}
}

const mapStateToProps = state =>{
  return({
    currentUser: state.users.currentUser,
    currentUserDecks: state.decks.currentUserDecks
  })
}

export default withRouter(connect(mapStateToProps)(Profile))
