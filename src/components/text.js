import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.style = "app-text " + props.styleme;
  }

  render() {
    return (
      <span className={this.style}>{this.props.children}</span>
    );
  }
}

export default Text;
