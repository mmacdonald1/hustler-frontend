export default (state = {cards:[]}, action) => {
  switch(action.type){
    case 'SET_CARDS':
      console.log("Set Cards Reducer", state, action)
      return action.cards
    case 'CREATE_CARD':
      console.log("Create Card Reducer", state, action)
      return [...state, action.card]
    case 'EDIT_CARD':
      console.log("Edit Card Reducer", state, action)
      const index = state.findIndex(card => card.id === action.id)
      const newState = state.splice(index, 1, action.card)
      console.log(newState, [...state])
      return [...state]
    case 'DELETE_CARD':
      console.log("Delete Card Reducer", state, action)
      return[...state.filter(card => card.id !== action.card.id)]
    default:
    return state;
  }
}
