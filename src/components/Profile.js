import React, {Fragment} from 'react'
import {Redirect, withRouter} from 'react-router-dom'


const Profile = (props) => {
  let {currentUser} = props
  console.log(props)
  return(
    <Fragment>
      { currentUser ? (
        <div>
          {props.currentUser.username}
        </div>
        ):(
          <Redirect to='/login'/>
        )
      }
    </Fragment>
  )
}

export default withRouter(Profile)
