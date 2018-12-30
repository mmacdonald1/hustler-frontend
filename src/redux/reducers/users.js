export default (state = {currentUser:{id:1, username:"lil_macd"},
  currentUserDecks:[{id:1, user_id:1, name:"Rails"}]}, action) => {
  switch(action.type){
    case 'ADD_USER':
      console.log("Add User Reducer", state, action)
       break;
    default:
    return state;
  }
}
