export const currentDeck = (deck) => {
  console.log("Action Current Deck", deck)
  return{
    type:"CURRENT_DECK",
    deck
  }
}
