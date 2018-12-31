import React, {Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import CardCard from '../components/CardCard'
import {connect} from 'react-redux';
import {setCards} from '../redux/actions/cards'

class DeckPage extends Component{
  constructor() {
      super();
      this.state = {
        show: false
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
      console.log(data, this.props)
      this.props.setCards(data.cards)
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
const mapStateToProps = state =>{
  return({
    cards: state.cards
  })
}

const mapDispatchToProps = dispatch =>{
  return({
    setCards: (cards)=> dispatch(setCards(cards))
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckPage)
