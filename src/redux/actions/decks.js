export const setDecks = (decks) => {
  console.log("Action set decks", decks)
  return{
    type:"SET_DECKS",
    decks
  }
}
export const createDeck = (deck) =>{
  console.log("Action create deck")
  return{
    type:"CREATE_DECK",
    deck
  }
}

export const editDeck = (deck) =>{
  console.log("Action edit deck")
  return{
    type:"EDIT_DECK",
    deck
  }
}

export const deleteDeck = (deck) =>{
  console.log("Action delete deck")
  return({
    type:"DELETE_DECK",
    deck
  })
}
