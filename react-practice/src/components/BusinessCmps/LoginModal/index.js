import "./index.css";
import FormInput from "@components/FormCmps/FormInput";
import axios from "axios";
export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.loginData = {
            username: "",
            password: ""
        };
        this.getFormValue = this.getFormValue.bind(this);
    }

    login = () => {
        if (this.props.username == "" || this.props.password == "") {
            alert("用户名或密码不能为空");
        }
        axios.post("/login/Auth", this.loginData)
            .then(res => {
                if (res.data == "1") {
                    alert("登录成功"); //eslint-disable-line
                }
            });
    }

    hoverOnForgetPwd() {
        document.getElementsByClassName("forget-mes")[0].style.display = "block";
    }

    leaveForgetPwd() {
        document.getElementsByClassName("forget-mes")[0].style.display = "none";
    }

    getFormValue(e, field, val) {
        this.loginData[field] = val;
    }

    render() {
        return (
            <div className="login-modal">
                <div className="login-modal-title">{this.props.title}</div>
                <div className="login-modal-content">
                   <div className="form-group-wrap">
                        <div className="form-group">
                            <i className="login-icon icon-user"></i>
                            <FormInput type="text" defaultValue="123" field="username" onChange={this.getFormValue} placeholder="默认用户名:admin"/>
                        </div>
                        <div className="form-group">
                            <i className="login-icon icon-password"></i>
                            <FormInput type="password" field="password"  onChange={this.getFormValue} placeholder="默认密码:admin"/>
                        </div>
                        <button className="login-btn" onClick={this.login}>Login</button>
                    </div>
                    <div className="login-forgetMessage">
                        <div className="forget-pwd" onMouseEnter={this.hoverOnForgetPwd} onMouseLeave={this.leaveForgetPwd}>忘记密码</div>
                    </div>
                </div>
                <div className="forget-mes">{this.props.forgetMessage}</div>
            </div>
        );
    }

}