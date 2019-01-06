export const setCards = (cards) => {
  console.log("Action set cards", cards)
  return{
    type:"SET_CARDS",
    cards
  }
}
export const createCard = (card) =>{
  console.log("Action create card")
  return{
    type:"CREATE_CARD",
    card
  }
}

export const editCard = (card) =>{
  console.log("Action edit card", card)
  return{
    type:"EDIT_CARD",
    card
  }
}

export const deleteCardFetch = (id) =>{
  console.log('You are trying to delete a card')
  let token = localStorage.getItem('token')
  return (dispatch)=>{
    fetch(`http://localhost:3000/cards/${id}`,{
      method:"DELETE",
      headers:{
        "Authentication" : `Bearer ${token}`
      }
    }).then(resp => resp.json())
    .then(data => dispatch(deleteCard(data)))
  }
  }


export const deleteCard = (card) =>{
  console.log("Action delete card")
  return({
    type:"DELETE_CARD",
    card
  })
}
