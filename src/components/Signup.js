import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Well, Alert} from 'react-bootstrap'
import { connect } from 'react-redux';
import {signupUser} from '../redux/actions/users'

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: null
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

  handleSignupSubmit = (e) =>{
    e.preventDefault()
    console.log('attempting to signup')
    let errors = {username: this.state.username.length>0, email:this.state.email.length>0, password:this.state.password.length>0}
    if(!Object.keys(errors).some(x => errors[x]=== false)){
      this.setState({error:null})
      this.props.signupUser(this.state.username, this.state.email, this.state.password)
    }
    else{
      this.setState({error: errors})
    }

  }


  render(){
    return(
      <div className="home-container">

              <Well className="home-text" >
                <h1> Welcome to Hustler </h1>
                <h2> A notecard app that quizes you based on your comfort level. </h2>
              </Well>

              <Well className="signup-form" >
                <h2 className="decks-title">Signup</h2>
                {this.state.error ? <Alert bsStyle="danger">{this.handleErrorMessage()}</Alert>: null}
                <form onSubmit={(e) => this.handleSignupSubmit(e)} >
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
              </Well>

      </div>
    )
  }
}
const mapDispatchToProps= dispatch =>{
  return({
    signupUser: (username, email, password)=>dispatch(signupUser(username, email, password))
  })
}

export default connect(null, mapDispatchToProps)(Signup)
