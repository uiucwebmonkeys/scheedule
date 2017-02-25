import React from 'react';

class HorizontalLine extends React.Component {
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
      }
    }

    return style
  }

  render() {
    return (
      <hr className={this.props.className} style={this.buildStyle(this.props)} />
    );
  }
}

export default HorizontalLine;