import React, {Component} from 'react'
import QuizCard from '../components/QuizCard'
import {connect} from 'react-redux';

class Quiz extends Component{

  state = {
    currentIndex: 0,
    currentCard:this.props.cards[0]
  }

  handleNewCard=()=>{
    let newCurrentIndex = this.state.currentIndex
    newCurrentIndex++
    console.log("CHANGING CARD", newCurrentIndex, this.props.cards.length )
    if(newCurrentIndex < this.props.cards.length){
      this.setState({
        currentIndex:newCurrentIndex,
        currentCard: this.props.cards[newCurrentIndex]
      })
    }else{
      this.setState({
        currentIndex:0,
        currentCard: this.props.cards[0]
      })
    }
  }

  render(){
    return(
      <div>
        <QuizCard card={this.state.currentCard} handleNewCard={this.handleNewCard}/>
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
