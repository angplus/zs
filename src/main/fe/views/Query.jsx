import React from 'react';

import TraceCodeDetail from '../components/TraceCodeDetail.jsx';
import BatchDetail from '../components/BatchDetail.jsx'
import Wrapper from '../components/Wrapper.jsx'
import { Color } from '../common/Constants';

export default class Query extends React.Component {

    constructor(props) {
        super(props)

        const {
            initialProps: {
                traceCode,
                batchCode,
            },
        } = this.props;

        this.state = {
            textInput: traceCode || batchCode,
            type: !!batchCode ? 'bc' : 'tc',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onQueryClick = this.onQueryClick.bind(this);
        this.renderSearchBar = this.renderSearchBar.bind(this);
        this.renderTraceCodeDetail = this.renderTraceCodeDetail.bind(this);
        this.renderBatchCodeDetail = this.renderBatchCodeDetail.bind(this);
    }

    onInputChange(event) {
        this.setState({
            textInput: event.target.value
        });
    }

    onSelectChange(event) {
        this.setState({
            type: event.target.value
        });
    }

    onQueryClick() {
        if (this.state.textInput) {
            window.location = `/query?${this.state.type}=${this.state.textInput}`;
        } else {
            window.location = '/query';
        }
    }

    renderSearchBar() {
        return (
                <div className="" style={{marginBottom: '10px'}}>
                    <div style={{float: 'none',margin: '0 auto'}}>
                        <div className="form-horizontal">
                            <div className="input-group">
                                <div className="input-group-btn">
                                    <select id="search_options" onChange={this.onSelectChange} defaultValue={this.state.type} className="form-control" data-style="btn-primary" style={{width:'100px', fontSize:'13px',borderTopLeftRadius: '4px',borderBottomLeftRadius: '4px'}}>
                                        <option value="tc">追溯码</option>
                                        <option value="bc" data-hidden="true" style={{backgroundColor:'#5bc0de !important', color:'#fff !important'}}>生产批号</option>
                                    </select>
                                </div>
                                <input id="fieldValue" type="text" value={this.state.textInput} onChange={this.onInputChange} className="form-control" placeholder="请输入..." aria-describedby="ddlsearch"/>
                                <span className="input-group-btn">
                                <button id="btn-search" onClick={this.onQueryClick} className="btn btn-info" type="button" style={{backgroundColor: Color.PanelHeaderBackground}}>查询</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

    renderTraceCodeDetail() {
        const {
            initialProps: {
                traceCode,
                product,
                material,
                order,
                inspection,
            },
        } = this.props;
        return (
            <TraceCodeDetail
                product={product || {}}
                material={material || {}}
                order={order || {}}
                inspection={inspection || {}}
                traceCode={traceCode}
            />
        )
    }

    renderBatchCodeDetail() {
        const {
            initialProps: {
                csbjc,
                djx,
                hongLiaoTong,
                jiChuJi,
                pllq,
            },
        } = this.props;

        return (
            <BatchDetail
                csbjc={csbjc || {}}
                djx={djx || {}}
                hongLiaoTong={hongLiaoTong || {}}
                jiChuJi={jiChuJi || {}}
                pllq={pllq || {}}
            />
        )
    }

    renderError() {
        return (
            <div style={{marginTop: '10px'}}>
                <p style={{color: 'blue'}}>尊敬的客户：</p>
                <p style={{margin: '0px'}}>你所查询的防伪码不存在，请再次核实且谨防</p>
                <p style={{margin: '0px'}}>假冒！如有疑问请、拨打4008-827-315咨询</p>
            </div>
        );
    }

    render() {
        const {
            initialProps: {
                traceCode,
                batchCode,
                ok,
            },
        } = this.props;
        return (
            <Wrapper disableBack={true}>
                {this.renderSearchBar()}
                {traceCode && ok && this.renderTraceCodeDetail()}
                {batchCode && ok && this.renderBatchCodeDetail()}
                {ok === false && this.renderError()}
            </Wrapper>
        );
    }
}

Query.propTypes = {
    initialProps: React.PropTypes.shape({
        traceCode: React.PropTypes.string,
        batchCode: React.PropTypes.string,
        ok: React.PropTypes.bool,
        product: React.PropTypes.any,
        material: React.PropTypes.any,
        order: React.PropTypes.any,
        inspection: React.PropTypes.any,
    }),
};

