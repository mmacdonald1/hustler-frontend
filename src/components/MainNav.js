import React from 'react'
import {withRouter} from "react-router-dom"
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {logoutUser} from '../redux/actions/users'

const MainNav = (props) =>{
  console.log(props)
  return(
    <Navbar className="nav-container" inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Hustler</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
      { props.logged_in ? (
        <Nav pullRight>
          <NavItem onClick={props.logoutUser} href="/">
            Logout
          </NavItem>
        </Nav>
      ) : (
        <Nav pullRight>
          <NavItem href="/login">
            Login
          </NavItem>
        </Nav>
      )
      }

      </Navbar.Collapse>
    </Navbar>
  )
}
const mapStateToProps = state =>{
  return({
    logged_in: !!state.users.username
  })
}
const mapDispatchToProps = dispatch =>{
  return({
    logoutUser: () => dispatch(logoutUser())
  })
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav))
