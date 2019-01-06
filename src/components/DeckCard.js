import React, {Component} from 'react'
import {Panel, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteDeckFetch} from '../redux/actions/decks'


class DeckCard extends Component{
  handleEditClick=()=>{
    console.log('You are trying to edit a deck')
    this.props.handleEditForm(this.props.deck)
  }
  handleDeleteClick=()=>{
    this.props.deleteDeckFetch(this.props.deck.id)
  }
  render(){
    return(
      <Panel>
        <Panel.Body>
          <Link to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</Link>
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
const mapDispatchToProps = dispatch => {
  return({
    deleteDeckFetch: (id) => dispatch(deleteDeckFetch(id))
  })
}

export default connect(null, mapDispatchToProps)(DeckCard)
