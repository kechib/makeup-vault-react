import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className="nav-link" href="#product-reviews">All Reviews</Nav.Link>
    <NavDropdown title="Account Options" id="navbarScrollingDropdown">

      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#sign-out">Sign Out</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Review Menu" id="navbarScrollingDropdown">

      <NavDropdown.Item href="#review/create">Create Reviews</NavDropdown.Item>
      <NavDropdown.Item href="#reviews">See Your Reviews</NavDropdown.Item>
    </NavDropdown>

  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className="nav-link" href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link className="nav-link" href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link className="nav-link" href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand className="brand" href="#">
      The Makeup Vault
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
