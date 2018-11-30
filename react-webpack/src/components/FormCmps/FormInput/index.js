import * as React from "react";
import PropTypes from "prop-types";

import "./FormInput.css";

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || "",
            placeholder: this.props.placeholder,
            hasError: false
        };
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        // this.isIE = ()
    }

    render() {
        const prefix = (
            <span className={`${this.props.prefixCls?this.props.prefixCls:""} form-input-prefix-wrapper`} > 
                { this.props.prefix }
            </span>
        );

        return (
            <div className="form-item">
                <label className="form-item-label">{this.props.label}</label>
                <div className="form-input-wrapper">
                    {this.props.prefix?prefix:null}
                    <input 
                    className="form-input"
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.state.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    />
                </div>
            </div>
        );
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
        if (this.props.onChange) {
            this.props.onChange(e, this.props.field ? this.props.field : this.props.name, e.target.value);
        }
    }

    onBlur(e) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }
}

FormInput.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    prefix: PropTypes.node,
    type: PropTypes.oneOf(["password", "text"]).isRequired,
    name: PropTypes.string,
    field: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    prefixCls: PropTypes.string
}

export default FormInput;