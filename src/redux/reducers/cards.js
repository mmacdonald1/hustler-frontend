export default (state = [], action) => {
  switch(action.type){
    case 'SET_CARDS':
      console.log("Set Cards Reducer", state, action)
      return action.cards
    case 'CREATE_CARD':
      console.log("Create Card Reducer", state, action)
      return [...state, action.card]
    case 'EDIT_CARD':
      console.log("Edit Card Reducer", state, action, action.card, action.card.id)
      const index = state.findIndex(card => card.id === action.card.id)
      const newState = state.splice(index, 1, action.card)
      console.log(index,newState, [...state])
      return [...state]
    case 'DELETE_CARD':
      console.log("Delete Card Reducer", state, action)
      return[...state.filter(card => card.id !== action.card.id)]
    default:
    return state;
  }
}
