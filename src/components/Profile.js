import React from 'react'

const Profile = (props) => {
  console.log(props)
  return(
    <div>
      {props.currentUser.username}
    </div>
  )
}

export default Profile
