import React, {Component} from 'react'
import {Well,Button} from 'react-bootstrap'

class QuizCard extends Component{


  render(){
    console.log("LOOK AT ME",this.props.cards)
    return(
      <div>
      {this.props.card?(
        <div>
          {this.props.clicked? (
            <Well>
              <h1 className="back-card-title">{this.props.card.title}</h1>
              <h2>{this.props.card.content}</h2>
              <Button bsStyle="primary" onClick={this.props.handleAgain}> Again </Button>
              <Button bsStyle="primary" onClick={this.props.handleGood}> Good </Button>
              <Button bsStyle="primary" onClick={this.props.handleEasy}> Easy </Button>
              <Button bsStyle="primary" onClick={this.props.handleNewCard}>Next Card</Button>
            </Well>
          )
            : (
            <Well>
              <h1>{this.props.card.title}</h1>
              <Button bsStyle="primary" onClick={this.props.handleCardClick}> Show Answer </Button>
              <Button bsStyle="primary" onClick={this.props.handleNewCard}>Next Card</Button>
            </Well>
            )}
        </div>
      ): null}
      </div>
    )
  }
}

export default QuizCard
