import React from 'react';
import { FormControl } from 'react-bootstrap';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
            value={this.state.value}
            onChange={this.handleChange}
            style={this.buildStyle(this.props)}
            placeholder={this.props.placeholder}
          />
        );
    }
}

export default TextInput;

//https://react-bootstrap.github.io/components.html#forms to add label, validation
