import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

 class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  // handleDocumentClick(e) {
  //   const container = this._element;
  //   if (e.target !== container && !container.contains(e.target)) {
  //     this.toggle();
  //   }
  // }

  // https://stackoverflow.com/questions/32452695/react-bootstrap-how-to-collapse-menu-when-item-is-selected
  // HELP WITH NAVBAR TOGGLE W/ HOOKS ^ 

  render() {
    return (
      <>
        <Navbar expand="md" className="navbar navbar-light" staticTop>
          <div className="container">
            <NavbarToggle onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem eventKey={1} ><NavLink className="nav-link" to="/home">Home</NavLink></NavItem>
                <NavItem eventKey={2} ><NavLink className="nav-link" to="/about">About</NavLink></NavItem>
                <NavItem eventKey={3} ><NavLink className="nav-link" to="/play">Play Game</NavLink></NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
