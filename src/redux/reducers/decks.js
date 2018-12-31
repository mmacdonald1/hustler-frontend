export default (state = {currentDecks:[]}, action) => {
  switch(action.type){
    case 'SET_DECKS':
      console.log("Set Decks Reducer", state, action)
      return action.decks
    case 'CREATE_DECK':
      console.log("Create Deck Reducer", state, action)
      return [...state, action.deck]
    case 'EDIT_DECK':
      console.log("Edit Deck Reducer", state, action)
      break;
    case 'DELETE_DECK':
      console.log("Delete Deck Reducer", state, action)
      return[...state.filter(deck => deck.id !== action.deck.id)]
    default:
    return state;
  }
}
