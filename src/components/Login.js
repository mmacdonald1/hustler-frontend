import React, {Component, Fragment} from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import {setUser} from '../redux/actions/users'
import {setDecks} from '../redux/actions/decks'

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
    fetch('http://localhost:3000/login', {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log('still attempting to login', data, data.user, data.user.decks)
      if(data.error){
        alert('incorrect username or password')
      }else{
        localStorage.setItem('token', data.token)
        this.props.setDecks(data.user.decks)
        this.props.setUser(data.user)
      }
    })
  }


  render(){
    return(
      <Fragment>
        <form  onSubmit={(e) => this.handleLoginSubmit(e)} >
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
      </Fragment>
    )
  }
}

const mapDispatchToProps= dispatch => {
  return({
    setUser: (user) => dispatch(setUser(user)),
    setDecks: (decks) => dispatch(setDecks(decks))
  })
}

export default connect(null, mapDispatchToProps)(Login)
