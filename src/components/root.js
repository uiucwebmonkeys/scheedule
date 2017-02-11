import React from 'react';
import Text from './text';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Text>Hello, Webmonkeys!!</Text>
      </div>
    );
  }
}

export default Root;
