import React, {Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import CardCard from '../components/CardCard'
import CreateCardModal from '../components/CreateCardModal'
import EditCardModal from  '../components/EditCardModal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {setCardsFetch} from '../redux/actions/cards'

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
    this.setState({ editShow: true, currentCard: card });
  }
  handleEditFormClose = (card) => {
    this.setState({ editShow: false, currentCard: null });
  }

  componentDidMount(){
    this.props.setCardsFetch(this.props.deck.id)
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
          <p>
            <Link to={`/quiz`}>
              Take a Quiz
            </Link>
          </p>
        </Jumbotron>
        <div>
          {this.props.cards[0] ? this.props.cards.map(card => <CardCard key={card.id} card={card} handleEditForm = {this.handleEditForm} />) : null}
        </div>
        <CreateCardModal show={this.state.show} deckId={this.props.deck.id} currentCard={this.state.currentCard} handleCardModalClose ={this.handleCardModalClose}/>
        <EditCardModal editShow={this.state.editShow} deckId={this.props.deck.id} currentCard={this.state.currentCard} handleEditFormClose={this.handleEditFormClose} />

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
    setCardsFetch: (deckId)=> dispatch(setCardsFetch(deckId))
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(DeckPage)
