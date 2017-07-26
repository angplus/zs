import React from 'react';

export default class ChangePass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            oldPass: "",
            newPass: "",
            repeatPass: "",
            message: undefined,
        };

        this.onOldPassChange = this.onOldPassChange.bind(this);
        this.onNewPassChange = this.onNewPassChange.bind(this);
        this.onRepeatPassChange = this.onRepeatPassChange.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
    }

    onOldPassChange(event) {
        this.setState({
            oldPass: event.target.value
        });
    }

    onNewPassChange(event) {
        this.setState({
            newPass: event.target.value
        });
    }

    onRepeatPassChange(event) {
        this.setState({
            repeatPass: event.target.value
        })
    }

    onChangePass(event) {
        event.preventDefault();
        const { oldPass, newPass, repeatPass } = this.state;

        if (newPass !== repeatPass) {
            this.setState({
                message: '两次输入密码不一致！',
            })
            return;
        }

        if (!newPass || !oldPass) {
            this.setState({
                message: '密码不能为空！',
            })
            return;
        }

        this.changePass(oldPass, newPass);

        this.setState({
            message: undefined,
        });
    }

    async changePass(oldPass, newPass) {
        let response;
        try {
            response = await fetch('/changePass', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldPass,
                    newPass,
                }),
            })

            const result = await response.json();

            if (result.ok) {
                this.setState({
                    oldPass: '',
                    newPass: '',
                    repeatPass: '',
                    message: '密码已修改',
                });
            } else {
                let message = '无法修改密码，请稍后重试！';
                if (result.errorCode === 3) {
                    message = '密码错误！';
                }

                this.setState({
                    oldPass: '',
                    newPass: '',
                    repeatPass: '',
                    message: message,
                });
            }

        } catch(error) {
            this.setState({
                message: '无法修改密码，请稍后重试！',
            });
        }
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onChangePass} className="col-lg-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-md-offset-2 col-xs-offset-2 col-md-8 col-xs-8">
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <input type="password" onChange={this.onOldPassChange} value={this.state.oldPass} className="form-control" placeholder="旧密码"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <input type="password" onChange={this.onNewPassChange} value={this.state.newPass} className="form-control" placeholder="新密码"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <input type="password" onChange={this.onRepeatPassChange} value={this.state.repeatPass} className="form-control" placeholder="确认密码"/>
                        </div>
                    </div>
                    {this.state.message && (
                        <div className="form-group row">
                            <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1">
                                <div className="text-left" style={{color: "#d9534f", fontSize: "14px"}}>{this.state.message}</div>
                            </div>
                        </div>
                        )}
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <button type="submit" className="btn btn-primary btn-block form-control">修改密码</button>
                        </div>
                    </div>
                    <div className="glyphicons glyphicons-user"></div>
                </form>
            </div>
        );
    }
}

ChangePass.propTypes = {
};

