import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            stayLogin: false,
            errorMessage: undefined,
        };

        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onStayLoginChange = this.onStayLoginChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    onUserNameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    onStayLoginChange(event) {
        this.setState({
            stayLogin: event.target.checked,
        })
    }

    onLogin(event) {
        event.preventDefault();
        const { username, password, stayLogin } = this.state;
        this.props.onLogin();
        this.loginApi(username, password, stayLogin);

        this.setState({
            errorMessage: undefined,
        });
    }

    onLoginFail(result) {
        if (result.errorCode === 1) {
            this.setState({
                errorMessage: "账号或密码错误！"
            })
        } else {
            this.setState({
                errorMessage: "无法登陆，请稍后再试！"
            })
        }

        this.props.onFail(result);
    }

    async loginApi(username, password, stayLogin) {
        let response;
        try {
            response = await fetch('/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    stayLogin: stayLogin,
                }),
            })

            const result = await response.json();

            if (result.ok) {
                this.props.onSuccess(result);
            } else {
                this.onLoginFail(result);
            }

        } catch(error) {
            this.onLoginFail({
                ok: false,
                errorCode: 2,
                errorMessage: "Something went wrong!",
            });
        }
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onLogin} className="col-lg-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-md-offset-2 col-xs-offset-0 col-md-8 col-xs-12">
                    <div className="form-group row">
                        <div className="" style={{fontWeight:'bold',fontSize:'1.2em',paddingBottom:'5px',textAlign:'center'}}>质量信息追溯系统</div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <input type="text" onChange={this.onUserNameChange} value={this.state.username} className="form-control" placeholder="用户名"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <input type="password" onChange={this.onPasswordChange} value={this.state.password} className="form-control" placeholder="密码"/>
                        </div>
                    </div>
                    {this.state.errorMessage && (
                        <div className="form-group row">
                            <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1">
                                <div className="text-left" style={{color: "#d9534f", fontSize: "14px"}}>{this.state.errorMessage}</div>
                            </div>
                        </div>
                        )}
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <button type="submit" className="btn btn-primary btn-block form-control">登录</button>
                        </div>
                    </div>
                    <div className="form-group row pull-right">
                        <div className="col-xs-12 col-xs-pull-2 col-lg-12 col-lg-pull-2">
                            <input type="checkbox" checked={this.state.stayLogin} onChange={this.onStayLoginChange} /><span style={{fontSize:'12px'}}>保存登录状态</span>
                        </div>
                    </div>
                    <div className="glyphicons glyphicons-user"></div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    onLogin: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onFail: React.PropTypes.func,
};

