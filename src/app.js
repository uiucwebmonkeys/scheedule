import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './components/root';

class App extends Component {
  render() {
    return (
      <Root></Root>
    );
  }
}

render(<App/>, document.getElementById('root'));
