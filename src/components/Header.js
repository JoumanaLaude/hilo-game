import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <Navbar isOpen={isOpen} expand="md" className="navbar navbar-light" staticTop>
        <div className="container">
          <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/home">Home</NavLink></NavItem>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/about">About</NavLink></NavItem>
              <NavItem><NavLink onClick={() => setIsOpen(false)} className="nav-link" to="/play">Play Game</NavLink></NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
  );
}

export default Header;
