import React from 'react';
import { Navbar } from 'react-bootstrap';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar className="MainNavbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" id="NavBrand">Scheedule</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default MainNavbar;
