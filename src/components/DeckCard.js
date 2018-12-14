import React from 'react'
import {Panel} from 'react-bootstrap'

function handleDeckClick() {
  alert('You have clicked on me');
}

const DeckCard = (props) => {
  return(
    <Panel onClick={handleDeckClick}>
      <Panel.Body>{props.name}</Panel.Body>
    </Panel>
  )
}

export default DeckCard
