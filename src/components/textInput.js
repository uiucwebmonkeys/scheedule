import React from 'react';
import { FormControl } from 'react-bootstrap';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  buildStyle(props) {
    var style = {};
    for (var p in props) {
      if (props.hasOwnProperty(p) && p !== "children") {
        if (p === "width") {
          style["width"] = props[p] + "px";
        }
        if (p === "height") {
          style["height"] = props[p] + "px";
        }
      }
    }

    return style;
  }

  render() {
    return (
      <FormControl
        className={this.props.className}
        type="text"
        onChange={this.props.onChange}
        style={this.buildStyle(this.props)}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}

export default TextInput;

//https://react-bootstrap.github.io/components.html#forms to add label, validation
