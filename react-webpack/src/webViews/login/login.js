// import "es5-shim";
import "babel-polyfill";
import HeaderBanner from "@components/BusinessCmps/HeaderBanner";
import LoginModal from "@components/BusinessCmps/LoginModal";
import axios from "axios";

import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.logoUrl = "../../assets/imgs/logo.png";
    }

    beforeSubmit(data) {
        if (data.username == "" || data.password == "") {
            alert("用户名或密码不能为空");
            return false;
        }
    }

    login(data) {
        axios.post("login/Auth", data)
            .then(res => {
                if (res.data.errCode == "1") {
                    alert("登录成功");
                    window.location.href = "./index.html";
                } else {
                    alert("用户名或密码错误");
                }
            });
    }

    render() {
        return (
            <div>
                <HeaderBanner logoUrl={this.logoUrl}/>
                <LoginModal 
                title="V1200" 
                login = {this.login} 
                beforeSubmit = {this.beforeSubmit}
                forgetMessage="请先使用默认用户名/密码尝试登录。如果不行，请按住设备机身上的“RST”或“RESET”按钮8秒后松开，等待约1分钟，再重新登录。"/>
            </div>
        );
    }
}

ReactDOM.render(
    <Login/>,
    document.getElementById("root")
);