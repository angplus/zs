import React from 'react';

import TraceCodeHeader from '../components/TraceCodeHeader.jsx';
import TraceCodeDetail from '../components/TraceCodeDetail.jsx';
import Wrapper from '../components/Wrapper.jsx'
import { Color } from '../common/Constants';

export default class ProductDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { initialProps: { product, material, order, inspection } } = this.props;

        return (
            <Wrapper>
                <TraceCodeHeader
                    traceCode={product.traceCode}
                />
                <TraceCodeDetail
                    product={product || {}}
                    material={material || {}}
                    order={order || {}}
                    inspection={inspection || {}}
                    traceCode={product.traceCode}
                />
            </Wrapper>
        );
    }
}

ProductDetail.propTypes = {
    initialProps: React.PropTypes.shape({
        product: React.PropTypes.shape({
            traceCode: React.PropTypes.string,
            scheduleId: React.PropTypes.string,
            productName: React.PropTypes.string,
            batchCode: React.PropTypes.string,
            brand: React.PropTypes.string,
            spec: React.PropTypes.string,
            standard: React.PropTypes.string,
            orgName: React.PropTypes.string,
            lineName: React.PropTypes.string,
            className: React.PropTypes.string,
            monitor: React.PropTypes.string,
            jockey: React.PropTypes.string,
            mechanic: React.PropTypes.string,
            endTime: React.PropTypes.string,
        }),
        material: React.PropTypes.shape({
            materialBatch: React.PropTypes.string,
            productFactory: React.PropTypes.string,
            orignName: React.PropTypes.string,
            czdPictureId: React.PropTypes.string,
            rtzlPictureId: React.PropTypes.string,
            sfjcPictureId: React.PropTypes.string,
            thPictureId: React.PropTypes.string,
        }),
        order: React.PropTypes.shape({}),
        inspection: React.PropTypes.shape({
            produceBatch: React.PropTypes.string,
            createTime: React.PropTypes.string,
            ccjsPictureId: React.PropTypes.string,
        }),
    }),
};

