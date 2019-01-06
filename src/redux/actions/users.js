import {setDecks} from './decks'

export const getUser = () => {
  let token = localStorage.getItem('token')
  //see if there is a token send it to the backend
  console.log("component did mount")
  if(token){
    console.log("in if")
    return (dispatch) => {fetch('http://localhost:3000/profile',{
      method:"GET",
      headers:{
        "Authentication" : `Bearer ${token}`
      }
    }).then(resp => resp.json())
    .then(data => {
      console.log(data, data.user, data.user.decks)
      dispatch(setDecks(data.user.decks))
      dispatch(setUser(data.user))
    })
  }
}
}


export const setUser = (user) => {
  console.log("Action set user", user)
  return{
    type:"SET_USER",
    user
  }
}

export const logoutUser = () => {
  console.log("Action logout user")
  return{
    type:"LOGOUT_USER"
  }
}

export const createUser = (user) =>{
  console.log("Action create user")
  return{
    type:"CREATE_USER",
    user
  }
}
