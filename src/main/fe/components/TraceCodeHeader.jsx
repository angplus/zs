import React from 'react';
import { Color } from '../common/Constants';

export default class TraceCodeHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { traceCode } = this.props;

        return (
            <div className="page-header" style={{marginTop: 0}}>
                <h4 style={{fontWeight: 'bold'}}>产品防伪标识码</h4>
                <p className="lead" style={{color: 'blue'}}>{traceCode}</p>
                <p style={{paddingLeft: '3px'}}>欢迎使用康泰正牌产品，感谢您的查询，欢迎再次选购</p>
            </div>
        );
    }
}

TraceCodeHeader.propTypes = {
    traceCode: React.PropTypes.string,
};

