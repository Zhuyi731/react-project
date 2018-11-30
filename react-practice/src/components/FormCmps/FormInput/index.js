import "./index.css";
export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue || "",
            placeholder: this.props.placeholder,
            hasError: false
        };
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }


    render() {
        return (
            <input 
            className="form-input"
            type={this.props.type}
            name={this.props.name}
            placeholder={this.state.placeholder}
            value={this.state.value}
            onChange={this.onChange}
            onBlur={this.onBlur}
            />
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