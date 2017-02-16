import React from 'react';
import FontAwesome from 'react-fontawesome';

class AppIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FontAwesome name={this.props.name} className="app-icon"/>
    );
  }
}

export default AppIcon;

//takes a name for the name of the font-awesome icon to use
//we could modify this to work for more than one icon set (like bootstrap glyphs)
