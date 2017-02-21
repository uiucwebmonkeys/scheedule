import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.classes = "app-text " + props.className;
  }

  buildStyle(props){
    var style = {};
    var colors = ["black", "white"]; //add other allowed text colors here
    for (var p in props) {
      if (props.hasOwnProperty(p) && p !== "children") {
        //console.log(p);
        if (colors.indexOf(p) !== -1) {
          style["color"] = p;
        }
        if (p === "font-size") {
          style["fontSize"] = props[p] + "px";
        }
        if (p === "tag") {
          if (props[p] === "p"){
            style["display"] = "block";
            //maybe mess with margins/padding
          }
        }
      }
    }
    return style;
  }

  render() {
    return (
      <span className={this.classes} style={this.buildStyle(this.props)}>{this.props.children}</span>
    );
  }
}

export default Text;
