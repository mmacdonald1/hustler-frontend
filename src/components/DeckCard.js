import React from 'react'
import {Panel, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'

function handleDeckClick() {
  alert('You have clicked on me');
}

const DeckCard = (props) => {
  return(
    <Panel onClick={handleDeckClick}>
      <Panel.Body>{props.name}</Panel.Body>
      <ButtonToolbar>
        <ButtonGroup>
          <Button bsSize="xsmall">
            <Glyphicon glyph="pencil" />
          </Button>
          <Button bsSize="xsmall">
            <Glyphicon glyph="remove" />
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Panel>
  )
}

export default DeckCard
