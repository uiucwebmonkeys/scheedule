import React from 'react';

class SearchBar extends React.Component {
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
            }
        }

        return style;
    }

    render() {
        return (
            <div className="form-group">
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="search"
            style={this.buildStyle(this.props)} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default SearchBar;