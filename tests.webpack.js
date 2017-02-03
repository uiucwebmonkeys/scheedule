//this is the bundle file for all the tests
//tell it where to find the tests and what the names of test files look like
var context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);

//https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack
