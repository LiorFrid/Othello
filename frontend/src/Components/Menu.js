import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const Menu = () => {
  return (
    <div className='App tc f3'  style={{marginBottom:'36px'}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand >Othello</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{}}>
            <Nav.Item><NavLink className="nav-link" exact to={"/"}>Home |</NavLink></Nav.Item>
            <Nav.Item><NavLink className="nav-link"  to={"/Game"}>Game |</NavLink></Nav.Item>
            <Nav.Item><NavLink className="nav-link"  to={"/Scores"}>Scores |</NavLink></Nav.Item>

          </Nav>
          <Nav className="ml-auto">
            <Nav.Item><NavLink className="nav-link" to={"/Login"}>Login</NavLink></Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;