import React from 'react';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { disableBack } = this.props;
        return (
        <div style={{marginBottom: '10px'}}>
          <div style={{backgroundColor: '#e0e0de', height: '57px'}}>
            <img src="/images/top_bg.jpg" style={{display: 'block', margin: '0 auto'}} />
          </div>
          <div style={{height: '30px', lineHeight: '30px', paddingLeft: '10px', backgroundColor: '#0067AC', }}>
            <p style={{fontSize: '14px', color: '#fff', fontFamily: '微软雅黑', display:'inline-block'}}>欢迎进入一码追溯查询中心</p>
            {
                disableBack || (
                    <div style={{display: 'inline-block', marginTop: '-2px', marginRight: '15px',float: 'right'}} onClick={() => {window.location='/query'}}>
                        <img src="/images/icon_back.png" style={{width: '20px'}} title="返回查询界面"/>
                    </div>
                )
            }
          </div>
        </div>
        );
    }

    //old one
    // render() {
    //     return (
    //         <nav className="navbar navbar-default">
    //           <div className="container">
    //             <div className="navbar-header">
    //                 {
    //                     this.props.showLogin && (
    //                       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
    //                         <span className="icon-bar"></span>
    //                         <span className="icon-bar"></span>
    //                         <span className="icon-bar"></span>                        
    //                       </button>
    //                     )
    //                }
    //               <a className="navbar-brand" href="#">
    //                 <span style={{color: '#015198'}}><img src="/favicon.ico" alt="Logo" style={{height: "30px"}} />  一码追溯系统</span>
    //               </a>
    //             </div>
    //             {
    //                 this.props.showLogin && (
    //                     <div id="navbar" className="navbar-collapse collapse">
    //                       <ul className="nav navbar-nav navbar-right">
    //                         <li><a href="#" data-toggle="modal" data-target="#loginModal">登录</a></li>
    //                       </ul>
    //                     </div>
    //                 )
    //            }
    //           </div>
    //         </nav>
    //     );
    // }
}
                    // <li><a href="http://www.ktsj.com.cn" target="_blank">公司主页</a></li>

NavBar.propTypes = {
    // showLogin: React.PropTypes.bool,
    disableBack: React.PropTypes.bool,
};

