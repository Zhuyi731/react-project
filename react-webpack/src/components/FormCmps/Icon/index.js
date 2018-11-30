import * as React from "react";
import PropTypes from "prop-types";

import "./Icon.scss";

class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.inlineStyle = {
            width: this.props.width + "px",
            height: this.props.height + "px",
            cursor: !!this.props.onclick ? "pointer" : "default",
            fontSize: this.props.fontSize,
            color: this.props.color,
            display: "inline-block"
        }
    }

    onClick = (e) => {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <i 
            className={`icon icon-${this.props.type}`} 
            style={this.inlineStyle} 
            onClick={this.onClick}
            >
            </i>
        );
    }
}

Icon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    fontSize: PropTypes.string,
    color: PropTypes.string
};
Icon.defaultProps = {
    width: 28,
    height: 28,
    fontSize: "14px",
    color: "#fff"
}

export default Icon;