import React, {Component} from 'react'
import {Well,Button} from 'react-bootstrap'

class QuizCard extends Component{


  render(){
    console.log("LOOK AT ME",this.props.cards)
    return(
      <div>
      {this.props.card?(
        this.props.done?(
          <Well>
            <h1>You are done!!!</h1>
            <div className="quiz-side">
              <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleMoreQuiz}> Take Quiz Again </Button>
              <Button className="quiz-buttons" bsStyle="primary" href="/profile"> Go To Profile </Button>
            </div>
          </Well>
        ):(
          <div>
            {this.props.clicked? (
              <Well>
                <h1 className="back-card-title">{this.props.card.title}</h1>
                <h2>{this.props.card.content}</h2>
                <div className="quiz-side">
                  <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleAgain}> Again </Button>
                  <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleGood}> Good </Button>
                  <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleEasy}> Easy </Button>
                  <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleNewCard}>Next Card</Button>
                </div>
              </Well>
            )
              : (
              <Well>
                <h1>{this.props.card.title}</h1>
                <div className="quiz-side">
                  <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleCardClick}> Show Answer </Button>
                  <Button className="quiz-buttons" bsStyle="primary" onClick={this.props.handleNewCard}>Next Card</Button>
                </div>
              </Well>
              )}
          </div>
        )

      ): null}
      </div>
    )
  }
}

export default QuizCard
