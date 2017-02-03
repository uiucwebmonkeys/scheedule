var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Root = require('./root');

describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument('<Root/>');
    expect(root).toExist();
  });
});

//https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack
//this test (taken from the above resource) fails, but I don't know enough about karma/mocha to write a better test right now
