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
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <>
        <Navbar expand="md" className="navbar navbar-light">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem><NavLink className="nav-link" to="/home">Home</NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/about">About</NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/play">Play Game</NavLink></NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
