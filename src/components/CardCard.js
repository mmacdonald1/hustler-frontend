import React, {Component} from 'react'
import {Panel, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux';
import {deleteCard} from '../redux/actions/cards'

class CardCard extends Component{
  handleEditClick=()=>{
    console.log('You are trying to edit a card',this.props.card)
    this.props.handleEditForm(this.props.card)
  }
  handleDeleteClick=()=>{
    console.log('You are trying to delete a card')
    let token = localStorage.getItem('token')
    fetch(`http://localhost:3000/cards/${this.props.card.id}`,{
      method:"DELETE",
      headers:{
        "Authentication" : `Bearer ${token}`
      }
    }).then(resp => resp.json())
    .then(data => this.props.deleteCard(data))
  }

  render(){
    console.log(this.props)
    return(
      <Panel>
        <Panel.Body>
        <h3>{this.props.card.title}</h3>
        <p>{this.props.card.content}</p>
        </Panel.Body>
        <ButtonToolbar>
          <ButtonGroup>
            <Button bsSize="xsmall" onClick={this.handleEditClick}>
              <Glyphicon glyph="pencil" />
            </Button>
            <Button bsSize="xsmall" onClick={this.handleDeleteClick}>
              <Glyphicon glyph="remove" />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Panel>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return({
    deleteCard: (card) => dispatch(deleteCard(card))
  })
}

export default connect(null ,mapDispatchToProps)(CardCard)
