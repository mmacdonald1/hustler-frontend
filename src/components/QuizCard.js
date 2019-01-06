import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class QuizCard extends Component{
  state={
    clicked: false
  }

  handleCardClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    console.log(this.props,this.props.card)
    return(
      <div>
      {this.props.card?(
        <div onClick={this.handleCardClick}>
          {this.state.clicked? this.props.card.content: this.props.card.title}
        </div>
      ): null}
      <Button bsStyle="primary" onClick={this.props.handleNewCard}>Next Card</Button>
      </div>
    )
  }
}

export default QuizCard
