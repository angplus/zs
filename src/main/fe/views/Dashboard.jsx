import React from 'react';

import NavBar from '../components/NavBar.jsx'
import Login from '../components/Login.jsx';
import AddUser from '../components/AddUser.jsx';
import ChangePass from '../components/ChangePass.jsx';
import { Color } from '../common/Constants';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props)

    }

    renderLogin() {
        return (
            <Login
                onLogin={() => {
                }}
                onSuccess={(result) => {
                    location.reload();
                }}
                onFail={(error) => {
                }}

            />
        );
    }

    renderChangePassword() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">修改密码</h3>
                </div>
                <div className="panel-body">
                    <ChangePass />
                </div>
            </div>
        );
    }

    renderAddUser() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">添加用户</h3>
                </div>
                <div className="panel-body">
                    <AddUser />
                </div>
            </div>
        );
    }

    renderError() {
        return (
           <div className="text-left" style={{color: "#d9534f", fontSize: "14px"}}>找不到相应数据！</div> 
        );
    }

    render() {
        const {
            initialProps: {
                logged,
                username,
                isManager,
            },
        } = this.props;
        return (
            <div>
                <NavBar
                    disableBack={true}
                />
                <div className="container" >
                    {logged || this.renderLogin()}
                    {logged && isManager && this.renderAddUser()}
                    {logged && this.renderChangePassword()}
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    initialProps: React.PropTypes.shape({
        logged: React.PropTypes.bool,
        username: React.PropTypes.string,
        isManager: React.PropTypes.bool,
    }),
};

