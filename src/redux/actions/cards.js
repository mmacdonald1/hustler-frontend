export const setCardsFetch = (deckId) =>{
  return (dispatch) =>{
    fetch(`https://hustler-backend.herokuapp.com/decks/${deckId}/cards`,{
      method:"GET",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }).then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(setCards(data.cards))
    })
  }
}

export const setCards = (cards) => {
  console.log("Action set cards", cards)
  return{
    type:"SET_CARDS",
    cards
  }
}

export const createCardFetch = (title, content, deckId) =>{
  return (dispatch) => {
    fetch(`https://hustler-backend.herokuapp.com/cards`, {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content,
        deck_id: deckId
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(createCard(data.card))
    })
  }
}

export const createCard = (card) =>{
  console.log("Action create card")
  return{
    type:"CREATE_CARD",
    card
  }
}
export const editCardFetch = (cardId, title ,content, deckId) =>{
  return (dispatch) =>{
    fetch(`https://hustler-backend.herokuapp.com/cards/${cardId}`, {
      method:"PATCH",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content,
        deck_id: deckId
      })
    }).then(resp => resp.json())
    .then(data =>{
      console.log(data)
      dispatch(editCard(data.card))
    })
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
    fetch(`https://hustler-backend.herokuapp.com/cards/${id}`,{
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
