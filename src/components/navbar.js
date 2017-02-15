import React from 'react';
import Text from './text';
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
            <a href="#" id="NavBrand"><Text>Scheedule</Text></a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default MainNavbar;
