import React from 'react';

export default class AddUser extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            message: undefined,
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    onAddUser(event) {
        event.preventDefault();
        const { username } = this.state;

        if (!username) {
            this.setState({
                message: '用户名不能为空！',
            })
            return;
        }

        this.addUser(username);

        this.setState({
            message: undefined,
        });
    }

    async addUser(username) {
        let response;
        try {
            response = await fetch('/addUser', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                }),
            })

            const result = await response.json();

            if (result.ok) {
                this.setState({
                    username: '',
                    message: '添加成功！',
                });
            } else {
                let message = '无法添加，请稍后重试!';
                if (result.errorCode === 4) {
                    message = '用户已存在！'; 
                }
                this.setState({
                    username: '',
                    message: message,
                });
            }

        } catch(error) {
            this.setState({
                message: '无法添加，请稍后重试!',
            });
        }
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onAddUser} className="col-lg-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-md-offset-2 col-xs-offset-2 col-md-8 col-xs-8">
                    <div className="form-group row">
                        <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-lg-offset-1 col-xs-offset-1">
                            <input type="text" onChange={this.onUsernameChange} value={this.state.username} className="form-control" placeholder="用户名"/>
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
                            <button type="submit" className="btn btn-primary btn-block form-control">添加用户</button>
                        </div>
                    </div>
                    <div className="glyphicons glyphicons-user"></div>
                </form>
            </div>
        );
    }
}

AddUser.propTypes = {
};

