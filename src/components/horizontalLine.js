import React from 'react';

class HorizontalLine extends React.Component {
  constructor(props) {
    super(props);
  }

  buildStyle(props) {
    var style = {};
    var colors = ["black"];

    for (var p in props) {
      if (props.hasOwnProperty(p) && p !== "children") {
        if (p === "width") {
          style["width"] = props[p] + "px";
        }

        if (colors.indexOf(p) !== -1) {
          style["border-top"] = "1px solid " + p;
        }

        if (p === "margin-top") {
          style["margin-top"] = props[p] + "px";
        }

        if (p === "margin-bottom") {
          style["margin-bottom"] = props[p] + "px";
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