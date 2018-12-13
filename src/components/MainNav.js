import React from 'react'
import {NavLink, withRouter} from "react-router-dom"
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const MainNav = (props) =>{
  console.log(props)
  // let { location: { pathname } } = props
  let logged_in = props.logged_in;
  let logout = props.logout
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Hustler</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
      { logged_in ? (
        <Nav pullRight>
          <NavItem onClick={logout} href="/logout">
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

export default withRouter(MainNav)
