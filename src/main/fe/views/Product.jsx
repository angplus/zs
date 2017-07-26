import React from 'react';

import Login from '../components/Login.jsx';
import TraceCodeHeader from '../components/TraceCodeHeader.jsx';
import Wrapper from '../components/Wrapper.jsx'
import { Color } from '../common/Constants';

export default class Product extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showLogin: false,
        };

        this.keyClass = "text-left col-lg-5 col-xs-5";
        this.valueClass = "text-left col-lg-7 col-xs-7";

        this.styles = {
            keyStyle: {
                fontWeight: 600,
            },
            row: {
                height: "38px",
                backgroundColor: '#33b0e8',
                backgroundImage: '-webkit-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-moz-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-ms-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-o-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: 'linear-gradient(to bottom, #33b0e8, #005ba1)',
                color: '#ffffff',
                marginBottom: '5px',
                display: 'flex',
                alignItems: 'center',
            },
            click: {
                color: 'white',
            },
        };

        this.getDetailLocation = this.getDetailLocation.bind(this);
    }

    getDetailLocation() {
        return `/query?tc=${this.props.initialProps.product.traceCode}&sd=1`;
    }

    gotoDetailPage() {
        window.location = this.getDetailLocation();
    }

    showError(error) {
    }

    render() {
        const { initialProps } = this.props;

        return (
            <Wrapper>
                <TraceCodeHeader
                    traceCode={initialProps.product.traceCode}
                />
                <div className="" style={{fontSize: '1.0em'}}>
                    <div
                        style={{
                                overflow: 'hidden',
                        }} >
                        <div style={Object.assign({}, this.styles.row, {borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 'solid 1px'})}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >产品名称：</div>
                            <div className={this.valueClass} >{initialProps.product.productName}</div>
                        </div>
                        <div style={this.styles.row}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >品牌：</div>
                            <div className={this.valueClass} >{initialProps.product.brand}</div>
                        </div>
                        <div style={this.styles.row}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >型号规格：</div>
                            <div className={this.valueClass} >{initialProps.product.spec}</div>
                        </div>
                        <div style={this.styles.row}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >生产批次号：</div>
                            <div className={this.valueClass} >{initialProps.product.batchCode}</div>
                        </div>
                        <div style={this.styles.row}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >防伪码：</div>
                            <div className={this.valueClass} >{initialProps.product.traceCode}</div>
                        </div>
                        <div style={this.styles.row}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >执行标准：</div>
                            <div className={this.valueClass} >{initialProps.product.standard}</div>
                        </div>
                        <div style={this.styles.row}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >生产日期：</div>
                            <div className={this.valueClass} >{initialProps.product.endTime}</div>
                        </div>
                        <div style={Object.assign({}, this.styles.row, {borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', border: 'solid 1px'})}>
                            <div className={this.keyClass} style={this.styles.keyStyle} >更多信息：</div>
                            <div className={this.valueClass} >
                                {
                                    initialProps.logged ? (
                                        <a href={this.getDetailLocation()} style={this.styles.click}>点击这里</a>
                                    ) : (
                                        <a href="#" data-toggle="modal" data-target="#loginModal" style={this.styles.click}>点击这里</a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title">请登录</h4>
                        </div>
                        <div className="modal-body">
                            <Login
                                onLogin={() => {
                                }}
                                onSuccess={(result) => {
                                    this.gotoDetailPage(result);
                                }}
                                onFail={(error) => {
                                    this.showError(error);
                                }}
                            />
                        </div>
                    </div>
                  </div>
                </div>
                {/*this.state.showLogin && (
                    <Login
                        onLogin={() => {
                        }}
                        onSuccess={(result) => {
                            this.gotoDetailPage(result);
                        }}
                        onFail={(error) => {
                            this.showError(error);
                        }}
                    />
                    )*/}
            </Wrapper>
        );
    }
}

Product.propTypes = {
   initialProps: React.PropTypes.shape({
        product: React.PropTypes.shape({
            traceCode: React.PropTypes.string,
            productId: React.PropTypes.string,
            productName: React.PropTypes.string,
            brand: React.PropTypes.string,
            spec: React.PropTypes.string,
            batchCode: React.PropTypes.string,
            standard: React.PropTypes.string,
            endTime: React.PropTypes.string,
        }),
        logged: React.PropTypes.bool,
   }),
};

