export default class HeaderBanner extends React.Component {
    constructor() {
        super();
        this.wrapperStyle = {
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: 60,
            backgroud: "#ed7020"
        };
        this.logoStyle = {
            position: "absolute",
            left: 200,
            top: 12,
            height: 30,
            width: 130
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="header-banner" style={this.wrapperStyle}>
                <img className="login-logo" style={this.logoStyle} src={this.props.logoUrl}/>
            </div>
        );
    }

}