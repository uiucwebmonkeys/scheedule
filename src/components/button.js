import React from 'react';
import { Button } from 'react-bootstrap';
import Text from './text'
import AppIcon from './icon'

class AppButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  //button click handler
  buttonClicked(e) {
    if (this.props.onClick) {
        this.props.onClick(e);
    } else {
      console.log("there isn't a function attached to this button");
    }
  }

  buildStyle(props){
    var style = {};
    var colors = {"purple":"#B900FF", "blue":"blue"};
    for (var p in props) {
      if (props.hasOwnProperty(p) && p !== "children"){
        //console.log(p);
        if (colors[p]){
          style["backgroundColor"] = colors[p];
        }
      }
    }
    return style;
  }

  //use conditional rendering to make sure an icon is only displayed if one is supplied in the definition
  render() {
    return (
      <Button bsClass="btn app-button" style={this.buildStyle(this.props)} onClick={this.buttonClicked}>
        {this.props.icon && <AppIcon name={this.props.icon}/>}
        <Text>{this.props.text}</Text>
      </Button>
    );
  }
}

export default AppButton;