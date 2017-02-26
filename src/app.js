import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './pages/root';
import ReviewSchedule from './pages/review-schedule';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { classReducer } from './reducers';
import { addClass } from './actions';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

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
      	<Router history={hashHistory}>
      		<Route path="/">
      			<IndexRoute component={Root} />
        		<Route path="/review-schedule" component={ReviewSchedule} />
        	</Route>
        </Router>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('root'));
