import React from 'react';
import { Navbar } from 'react-bootstrap';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar className="main-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" id="main-link">
              <text>Scheedule</text>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default MainNavbar;
