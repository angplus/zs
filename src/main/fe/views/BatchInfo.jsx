import React from 'react';

import TraceCodeHeader from '../components/TraceCodeHeader.jsx';
import BatchDetail from '../components/BatchDetail.jsx'
import Wrapper from '../components/Wrapper.jsx'

import { Color } from '../common/Constants';

export default class BatchInfo extends React.Component {

    constructor(props) {
        super(props)

        this.keyClass = "col-xs-6 col-sm-5";
        this.valueClass = "col-xs-6 col-sm-7";

        this.styles = {
            tableRow: {
                paddingTop:'3px',
            },
        };

    }

    render() {
        const { initialProps: { ok, traceCode, csbjc, djx, hongLiaoTong, jiChuJi, pllq } } = this.props;

        return (
            <Wrapper>
                {
                    traceCode && (
                        <TraceCodeHeader
                            traceCode={traceCode}
                        />
                    )
                }
                {
                    ok ? (
                        <BatchDetail
                            csbjc={csbjc || {}}
                            djx={djx || {}}
                            hongLiaoTong={hongLiaoTong || {}}
                            jiChuJi={jiChuJi || {}}
                            pllq={pllq || {}}
                        />
                    ) : (
                        <div className="text-left" style={{color: "#d9534f", fontSize: "14px"}}>找不到相应数据！</div> 
                    )
                }
            </Wrapper>
        );
    }
}

BatchInfo.propTypes = {
    initialProps: React.PropTypes.shape({
        ok: React.PropTypes.bool,
        traceCode: React.PropTypes.string,
        csbjc: React.PropTypes.any,
        djx: React.PropTypes.any,
        hongLiaoTong: React.PropTypes.any,
        jiChuJi: React.PropTypes.any,
        pllq: React.PropTypes.any,
    }),
};

