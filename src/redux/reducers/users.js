export default (state = {currentUser:null}, action) => {
  switch(action.type){
    case 'SET_USER':
      console.log("Set User Reducer", state, action)
      return action.user
    default:
    return state;
  }
}
