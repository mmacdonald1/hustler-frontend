export default (state = {currentDecks:null}, action) => {
  switch(action.type){
    case 'SET_DECKS':
      console.log("Set Decks Reducer", state, action)
      return action.decks
    default:
    return state;
  }
}
