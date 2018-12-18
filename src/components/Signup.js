import React, {Component, Fragment} from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

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
    fetch('http://localhost:3000/users', {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log('still attempting to signup', data)
      if(data.error){
        alert(data.error)
      }else{
        console.log(data)
        localStorage.setItem('token', data.token)
        this.props.updateCurrentUser(data.user)
      }
    })
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

export default Signup
