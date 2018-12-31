export default (state = {currentUser:null}, action) => {
  switch(action.type){
    case 'SET_USER':
      console.log("Set User Reducer", state, action)
      return action.user
    case 'CREATE_USER':
      console.log("Create User Reducer", state, action)
      let newUser = {id: action.user.id, username: action.user.username, email: action.user.email}
      return newUser
    case 'LOGOUT_USER':
      console.log("Logout User Reducer", state, action)
      localStorage.removeItem('token')
      return null
    default:
    return state;
  }
}
