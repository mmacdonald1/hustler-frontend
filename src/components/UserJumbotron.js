import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const UserJumbotron = (props) => {
  return(
    <Jumbotron>
      <h1>Hello, {props.username}!</h1>
      <p>
        Welcome to Hustler.
      </p>
      <p>
        <Button bsStyle="primary" onClick={props.handleShow}>Create a Deck</Button>
      </p>
    </Jumbotron>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return({
    username: state.currentUser.username
  })
}
const mapDispatchToProps = () =>{
  handleShow: () => {dispatch({type: "OPEN_MODAL"})}
}
export default connect(mapStateToProps)(UserJumbotron)
