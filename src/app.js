import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './pages/root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { classReducer } from './reducers';
import { addClass } from './actions';

const store = createStore(classReducer);

//test the store
// subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('root'));
