import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Well} from 'react-bootstrap'
import { connect } from 'react-redux';
import {loginUser} from '../redux/actions/users'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]:value})
  }

  handleLoginSubmit = (e) =>{
    e.preventDefault()
    console.log('attempting to login')
    this.props.loginUser(this.state.username,this.state.password)
  }


  render(){
    return(
      <div className="home-container">
        <div className="login-form">
          <Well>
            <form onSubmit={(e) => this.handleLoginSubmit(e)} >
              <h2 className="decks-title">Login</h2>
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
          </Well>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps= dispatch => {
  return({
    loginUser: (username, password) => dispatch(loginUser(username, password)),
  })
}

export default connect(null, mapDispatchToProps)(Login)
