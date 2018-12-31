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
  console.log("Action edit card")
  return{
    type:"EDIT_CARD",
    card
  }
}

export const deleteCard = (card) =>{
  console.log("Action delete card")
  return({
    type:"DELETE_CARD",
    card
  })
}
