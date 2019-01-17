export default (state = [], action) => {
  switch(action.type){
    case 'SET_DECKS':
      console.log("Set Decks Reducer", state, action)
      return action.decks
    case 'CREATE_DECK':
      console.log("Create Deck Reducer", state, action)
      return [...state, action.deck]
    case 'EDIT_DECK':
      console.log("Edit Deck Reducer", state, action)
      const index = state.findIndex(deck => deck.id === action.deck.id)
      const newState = state.splice(index, 1, action.deck)
      console.log(newState, [...state])
      return [...state]

    case 'DELETE_DECK':
      console.log("Delete Deck Reducer", state, action)
      return[...state.filter(deck => deck.id !== action.deck.id)]
    default:
    return state;
  }
}
