import {setDecks} from './decks'

export const getUser = (token) => {
    console.log("in if")
    return (dispatch) => {
      fetch('http://localhost:3000/profile',{
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

export const loginUser = (username, password) =>{
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log('still attempting to login', data, data.user, data.user.decks)
      if(data.error){
        alert('incorrect username or password')
      }else{
        localStorage.setItem('token', data.token)
        dispatch(setDecks(data.user.decks))
        dispatch(setUser(data.user))
      }
    })
  }
}

export const signupUser = (username, email, password) =>{
  return (dispatch) => {
    fetch('http://localhost:3000/users', {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log('still attempting to signup', data)
      if(data.error){
        alert(data.error)
      }else{
        console.log(data)
        localStorage.setItem('token', data.token)
        dispatch(createUser(data.user))
      }
    })
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
