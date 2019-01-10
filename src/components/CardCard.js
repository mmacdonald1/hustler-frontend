import React, {Component} from 'react'
import {ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap'
import {connect} from 'react-redux';
import {deleteCardFetch} from '../redux/actions/cards'

class CardCard extends Component{
  handleEditClick=()=>{
    console.log('You are trying to edit a card',this.props.card)
    this.props.handleEditForm(this.props.card)
  }
  handleDeleteClick=()=>{
  this.props.deleteCardFetch(this.props.card.id)
  }

  render(){
    console.log(this.props)
    return(

        <tr>
           <td>{this.props.card.title}</td>
           <td>{this.props.card.content}</td>
           <td className="buttons-column">
             <ButtonToolbar>
               <ButtonGroup>
                 <Button bsSize="xsmall" onClick={this.handleEditClick}>
                   <Glyphicon glyph="pencil" />
                 </Button>
                 <Button bsSize="xsmall" onClick={this.handleDeleteClick}>
                   <Glyphicon glyph="remove" />
                 </Button>
               </ButtonGroup>
             </ButtonToolbar>
           </td>
        </tr>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return({
    deleteCardFetch: (id) => dispatch(deleteCardFetch(id))
  })
}

export default connect(null ,mapDispatchToProps)(CardCard)
