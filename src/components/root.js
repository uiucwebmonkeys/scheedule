import React from 'react';
import Text from './text';
import MainNavbar from './navbar';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainNavbar />
      </div>
    );
  }
}

export default Root;
