import React, {Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import CardCard from '../components/CardCard'

class DeckPage extends Component{
  constructor() {
      super();
      this.state = {
        show: false,
        cards:[]
      };
  }
  componentDidMount(){
    fetch(`http://localhost:3000/decks/${this.props.deck.id}/cards`,{
      method:"GET",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }).then(resp => resp.json())
    .then(data => {
      this.setState({cards:data.cards})
    })
  }
  handleCardModalShow=()=>{
    this.setState({show:true})
  }
  render(){
    console.log(this.props.deck)
    return(
      <div>
        <Jumbotron>
          <h1>{this.props.deck.name}</h1>
          <p>
            <Button bsStyle="primary" onClick={this.handleCardModalShow}>Create a Card</Button>
          </p>
        </Jumbotron>
        <div>
          {this.state.cards ? this.state.cards.map(card => <CardCard key={card.id} card={card}/>) : null}
        </div>
      </div>
    )
  }
}

export default DeckPage
