import "./loginModal.scss";
import FormInput from "@components/FormCmps/FormInput";
import Icon from "@components/FormCmps/Icon";

export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.loginData = {
            username: "",
            password: ""
        };
        this.getFormValue = this.getFormValue.bind(this);
        this.login = this.login.bind(this);
    }

    login() {
        if (this.props.username == "" || this.props.password == "") {
            alert("用户名或密码不能为空");
        }
        if (this.props.beforeSubmit && this.props.beforeSubmit(this.loginData) === false) {
            return;
        }
        this.props.login(this.loginData);
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
        const userIcon = (
                <Icon type="user" />
            ),
            passwordIcon = (
                <Icon type="password"/>
            );
        return (
            <div className="login-modal">
                <div className="login-modal-title">{this.props.title}</div>
                <div className="login-modal-content">
                   <div className="form-group-wrap">
                        <FormInput 
                            type="text" 
                            prefix={userIcon} 
                            defaultValue="admin" 
                            field="username" 
                            onChange={this.getFormValue} 
                            placeholder="默认用户名:admin"
                        />
                        <FormInput 
                            type="password"  
                            field="password" 
                            prefix={passwordIcon} 
                            onChange={this.getFormValue} 
                            placeholder="默认密码:admin"
                        />
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

LoginModal.propTypes = {
    title: PropsTypes.string,
    login: PropsTypes.func.isRequired,
    beforeSubmit: PropsTypes.func,
    forgetMessage: PropsTypes.string
};