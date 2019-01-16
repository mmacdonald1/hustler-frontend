import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Well, Alert} from 'react-bootstrap'
import { connect } from 'react-redux';
import {loginUser} from '../redux/actions/users'

class Login extends Component {
  state = {
    username: "",
    password: "",
    error:null
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]:value})
  }

  handleErrorMessage = () =>{
    const reducer = (acc, cur) => {
      if (!cur[1]) {
        return [...acc, cur[0]];
      } else {
        return acc;
      }
    }
    let ret = Object.entries(this.state.error).reduce(reducer, []);

    return `Invalid ${ret.join(", ")}. Must be at least 1 character.`
  }

  handleLoginSubmit = (e) =>{
    e.preventDefault()
    console.log('attempting to login')
    let errors = {username: this.state.username.length>0, password:this.state.password.length>0}
    if(!Object.keys(errors).some(x => errors[x]=== false)){
      this.setState({error:null})
      this.props.loginUser(this.state.username,this.state.password)
    }
    else{
      this.setState({error: errors})
    }
  }


  render(){
    return(
      <div className="home-container">
        <div className="login-form">
          <Well>
            <form onSubmit={(e) => this.handleLoginSubmit(e)} >
              <h2 className="decks-title">Login</h2>
              {this.state.error ? <Alert bsStyle="danger">{this.handleErrorMessage()}</Alert>: null}
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
