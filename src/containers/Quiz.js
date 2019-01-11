import React, {Component} from 'react'
import QuizCard from '../components/QuizCard'
import {connect} from 'react-redux';

class Quiz extends Component{

  state = {
    currentIndex: 0,
    currentCard:this.props.cards[0],
    clicked: false,
    cards: this.props.cards,
    done:false
  }

  componentDidMount(){
    this.setState({
      currentIndex: 0,
      currentCard:this.props.cards[0],
      clicked: false,
      cards: this.props.cards
    })
  }

  handleCardClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  handleAgain=()=>{
    let oldCard = this.state.currentCard
    let newCards = this.state.cards
    let newIndex = parseInt(this.state.currentIndex)
    newIndex = newIndex + 2
    newCards.splice(newIndex,0,oldCard)
    this.setState({
      cards: newCards
    })
    this.handleNewCard()
  }
  handleGood=()=>{
    let oldCard = this.state.currentCard
    let newCards = this.state.cards
    let newIndex = parseInt(this.state.currentIndex)
    newIndex = newIndex + 6
    newCards.splice(newIndex,0,oldCard)
    this.setState({
      cards: newCards
    })
    this.handleNewCard()
  }
  handleEasy=()=>{
    let oldCard = this.state.currentCard
    let newCards = this.state.cards
    let newIndex = parseInt(this.state.currentIndex)
    newIndex = newCards.length
    newCards.splice(newIndex,0,oldCard)
    this.setState({
      cards: newCards
    })
    this.handleNewCard()
  }

  handleNewCard=()=>{
    let newCurrentIndex = this.state.currentIndex
    newCurrentIndex++
    console.log("CHANGING CARD", newCurrentIndex, this.props.cards.length )
    if(newCurrentIndex < this.props.cards.length){
      this.setState({
        currentIndex:newCurrentIndex,
        currentCard: this.props.cards[newCurrentIndex],
        clicked: false
      })
    }else{
      this.setState({
        done: true
      })
    }
  }

  handleMoreQuiz=()=>{
    console.log("I want more", this.props.cards)
    this.setState({
      currentIndex:0,
      currentCard: this.props.cards[0],
      clicked: false,
      cards: this.props.cards,
      done: false
    })
  }

  render(){
    return(
      <div>
        <QuizCard card={this.state.currentCard} handleNewCard={this.handleNewCard} handleCardClick={this.handleCardClick} clicked={this.state.clicked} handleEasy={this.handleEasy} handleGood={this.handleGood} handleAgain={this.handleAgain} done={this.state.done} handleMoreQuiz={this.handleMoreQuiz}/>
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

export default connect(mapStateToProps)(Quiz)
