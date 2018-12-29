export default (state = [], action) => {
  switch(action.type){
    case 'CURRENT_DECK':
      console.log("Current deck", state, action)
    default:
    return state;
  }
}
