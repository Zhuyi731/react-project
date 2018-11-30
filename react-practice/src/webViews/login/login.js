import HeaderBanner from "@components/BusinessCmps/HeaderBanner";
import LoginModal from "@components/BusinessCmps/LoginModal";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.logoUrl = "/assets/imgs/logo.png";
    }

    render() {
        return (
            <div>
                <HeaderBanner logoUrl={this.logoUrl}/>
                <LoginModal title="V1200" forgetMessage="请先使用默认用户名/密码尝试登录。如果不行，请按住设备机身上的“RST”或“RESET”按钮8秒后松开，等待约1分钟，再重新登录。"/>
            </div>
        );
    }
}

ReactDOM.render(
    <Login/>,
    document.getElementById("root")
);