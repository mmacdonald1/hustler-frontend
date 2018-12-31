export default (state = {currentDecks:[]}, action) => {
  switch(action.type){
    case 'SET_DECKS':
      console.log("Set Decks Reducer", state, action)
      return action.decks
    case 'CREATE_DECKS':
      console.log("Create Decks Reducer", state, action)
      return [...state, action.deck]
    default:
    return state;
  }
}
