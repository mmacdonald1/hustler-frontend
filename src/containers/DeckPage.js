import React, {Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import CardCard from '../components/CardCard'
import CreateCardModal from '../components/CreateCardModal'
import EditCardModal from  '../components/EditCardModal'
import {connect} from 'react-redux';
import {setCards} from '../redux/actions/cards'

class DeckPage extends Component{
  constructor() {
      super();
      this.state = {
        show: false,
        editShow: false,
        currentCard:null
      };
  }

  handleCardModalClose = () => {
    this.setState({ show: false });
  }

  handleCardModalShow = () => {
    this.setState({ show: true });
  }
  handleEditForm = (card) => {
    console.log(card)
    this.setState({ show: true, currentCard: card });
  }
  handleEditFormClose = (card) => {
    this.setState({ show: false, currentCard: null });
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
          {this.props.cards[0] ? this.props.cards.map(card => <CardCard key={card.id} card={card} handleEditForm = {this.handleEditForm} />) : null}
        </div>
        <CreateCardModal show={this.state.show} deckId={this.props.deck.id} currentCard={this.state.currentCard} />
        <EditCardModal editShow={this.state.editShow} deckId={this.props.deck.id} currentCard={this.state.currentCard} handleCardModalClose={this.handleCardModalClose} />

      </div>
    )
  }
}
const mapStateToProps = state =>{
  console.log(state.cards)
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
