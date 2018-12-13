import React from 'react'
import Login from '../components/Login'

const HomeContainer = (props) => {
  return(
    <div>
      <Login updateCurrentUser={props.updateCurrentUser}/>
    </div>
  )
}

export default HomeContainer
