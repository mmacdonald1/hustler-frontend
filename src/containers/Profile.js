import React, {Component, Fragment} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import DeckCard from '../components/DeckCard'
import UserJumbotron from '../components/UserJumbotron'
import CreateDeckModal from '../components/CreateDeckModal'


class Profile extends Component{
  constructor() {
      super();
      this.state = {
        show: false
      };
  }

    handleClose = () => {
      this.setState({ show: false });
    }

    handleShow = () => {
      this.setState({ show: true });
    }

render(){
  let {currentUser, currentUserDecks} = this.props
  return(
    <Fragment>
      { currentUser ? (
        <div>

          <UserJumbotron username={currentUser.username} handleShow={this.handleShow}/>

          {currentUserDecks.map(deck => <DeckCard key={deck.id} name={deck.name} />)}

          <CreateDeckModal show={this.state.show} handleClose={this.handleClose} id={currentUser.id}/>

        </div>
        ):(
          <Redirect to='/login'/>
        )
      }
    </Fragment>
  )
}
}


export default withRouter(Profile)
