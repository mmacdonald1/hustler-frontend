import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'

const UserJumbotron = (props) => {
  return(
    <Jumbotron>
      <h1>Hello, {props.username}!</h1>
      <p>
        Welcome to Hustler.
      </p>
      <p>
        <Button bsStyle="primary">Create a Deck</Button>
      </p>
    </Jumbotron>
  )
}

export default UserJumbotron
