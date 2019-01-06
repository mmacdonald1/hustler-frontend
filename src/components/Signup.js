import React, {Component, Fragment} from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {signupUser} from '../redux/actions/users'

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]:value})
  }

  handleSignupSubmit = (e) =>{
    e.preventDefault()
    console.log('attempting to signup')
    this.props.signupUser(this.state.username, this.state.email, this.state.password)
  }


  render(){
    return(
      <Fragment>
        <form  onSubmit={(e) => this.handleSignupSubmit(e)} >
          <FormGroup
             controlId="formBasicText"
           >
             <ControlLabel>Username</ControlLabel>
             <FormControl
               name="username"
               type="text"
               value={this.state.username}
               placeholder="Enter username"
               onChange={this.handleChange}
             />
             <FormControl.Feedback />
           </FormGroup>

           <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Email</ControlLabel>
              <FormControl
                name="email"
                type="text"
                value={this.state.email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>

           <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                type="text"
                value={this.state.password}
                placeholder="Enter password"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>


          <Button type="submit">Submit</Button>

        </form>
      </Fragment>
    )
  }
}
const mapDispatchToProps= dispatch =>{
  return({
    signupUser: (username, email, password)=>dispatch(signupUser(username, email, password))
  })
}

export default connect(null, mapDispatchToProps)(Signup)
