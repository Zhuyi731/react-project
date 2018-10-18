import HeaderBanner from "../components/HeaderBanner";

export class Login extends React.Component {
    constructor() {
        this.state = {
            username: "",
            password: ""
        };
        this.logoUrl = "/imgs/logo.png";
    }

    render() {
        return (
            <HeaderBanner logo={this.logoUrl}/>
        );
    }
}