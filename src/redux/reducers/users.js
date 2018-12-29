export default (state = [], action) => {
  switch(action.type){
    case 'ADD_USER':
      console.log("Add User Reducer", state, action)
    default:
    return state;
  }
}
