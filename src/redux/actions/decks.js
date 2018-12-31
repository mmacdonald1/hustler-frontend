export const setDecks = (decks) => {
  console.log("Action set decks", decks)
  return{
    type:"SET_DECKS",
    decks
  }
}
export const createDecks = (deck) =>{
  console.log("Action create decks")
  return{
    type:"CREATE_DECKS",
    deck
  }
}
