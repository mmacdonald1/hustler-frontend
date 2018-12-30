import React, {Component} from 'react'
import {Panel, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'

class CardCard extends Component{
  handleEditClick=()=>{
    console.log('You are trying to edit a card')
  }
  handleDeleteClick=()=>{
    console.log('You are trying to delete a card')
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

export default CardCard
