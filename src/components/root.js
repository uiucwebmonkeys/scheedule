import React from 'react';
import Text from './text';
import MainNavbar from './navbar';
import AppButton from './button';
import SearchBar from './searchBar';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  //example button functionality
  appButtonClick(){
    console.log("You clicked my button!");
  }

  render() {
    return (
      <div>
        <MainNavbar />
        <SearchBar width="609" placeholder="e.g. CS225" />
        <AppButton purple text="Auto-Schedule" onClick={this.appButtonClick} icon="magic"/>
        <Text black font-size="40" tag="p">Hello, it's me.</Text>
      </div>
    );
  }
}

export default Root;
