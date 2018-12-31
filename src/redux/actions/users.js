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
