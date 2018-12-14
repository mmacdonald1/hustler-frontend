import React, {Fragment} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import DeckCard from '../components/DeckCard'
import UserJumbotron from '../components/UserJumbotron'


const Profile = (props) => {
  let {currentUser} = props
  console.log(props)
  return(
    <Fragment>
      { currentUser ? (
        <div>
          <UserJumbotron username={props.currentUser.username} />
          {props.currentUserDecks.map(deck => <DeckCard key={deck.id} name={deck.name} />)}
        </div>
        ):(
          <Redirect to='/login'/>
        )
      }
    </Fragment>
  )
}

export default withRouter(Profile)
