import React, {Component, Fragment} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import DeckCard from '../components/DeckCard'
import UserJumbotron from '../components/UserJumbotron'
import CreateDeckModal from '../components/CreateDeckModal'
import EditDeckModal from '../components/EditDeckModal'
import { connect } from 'react-redux';



class Profile extends Component{
  constructor() {
      super();
      this.state = {
        show: false,
        editShow:false,
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
      this.setState({ editShow: true, currentDeck: deck });
    }
    handleEditFormClose = (deck) => {
      this.setState({ editShow: false, currentDeck: null });
    }

render(){
  let {currentUser, currentUserDecks} = this.props
  return(
    currentUser.username ? (
      <Fragment>
          <div>
            <UserJumbotron handleShow={this.handleShow}/>
            <h1 className="decks-title">My Decks</h1>
            <div className="decks-container">
            {currentUserDecks[0] ? currentUserDecks.map(deck => <DeckCard key={deck.id} deck={deck} handleEditForm={this.handleEditForm} />) : null}
            </div>
            <CreateDeckModal show={this.state.show} currentDeck={this.state.currentDeck} handleClose={this.handleClose} />
            <EditDeckModal editShow={this.state.editShow} currentDeck={this.state.currentDeck} handleEditFormClose={this.handleEditFormClose} />

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
