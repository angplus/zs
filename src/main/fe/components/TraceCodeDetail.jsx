import React from 'react';

import Modal from './Modal.jsx';
import { Color } from '../common/Constants';

export default class TraceCodeDetail extends React.Component {

    constructor(props) {
        super(props)

        this.keyClass = "col-xs-6 col-sm-5";
        this.valueClass = "col-xs-6 col-sm-7";

        this.styles = {
            tableRow: {
                paddingTop:'3px',
            },
            panelShadow:{
                borderColor:Color.PanelHeaderBackground,
                boxShadow: '3px -3px 7px 2px #9e9d9d',
                marginTop:'10px',
                borderTopColor:'#33b0e8'
            },
            panelHeader: {
                backgroundColor: '#33b0e8',
                backgroundImage: '-webkit-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-moz-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-ms-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-o-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: 'linear-gradient(to bottom, #33b0e8, #005ba1)',
                color: '#ffffff'
            },
            images:{
                marginRight: '15px',
                display:'inline',
                width:'30px',
                height:'30px'
            }
        };

        this.state = {
            showImage: false,
            imageUrl: null,
        };

        this.onImageClick = this.onImageClick.bind(this);
        this.onImageViewerClose = this.onImageViewerClose.bind(this);
    }

    getImageUrl(imageId) {
        return `/image/${imageId}`;
    }

    getImageComponent(imageId) {
        return (
            <img
                src={this.getImageUrl(imageId)}
                style={{height: '40px', width: '40px', padding: '4px'}}
                onClick={this.onImageClick}/>
        );
    }

    onImageClick(image) {
        this.setState({
            showImage: true,
            imageUrl: image.nativeEvent.srcElement.src,
        });
    }

    onImageViewerClose() {
        this.setState({
            showImage: false,
            imageUrl: null,
        });
    }

    render() {
        const { product, material, order, inspection, traceCode } = this.props;

        return (
            <div className="panel-group" id="accordion" style={{fontSize: '1.0em'}}>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse1" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/TR_item1_meterial.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>原材料信息</span>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <table className="table">
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>原材料批次号:</td>
                                    <td className={this.valueClass}>{material.materialBatch}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>生产厂家:</td>
                                    <td className={this.valueClass}>{material.productFactory}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>物料名称:</td>
                                    <td className={this.valueClass}>{material.orignName}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>材质单:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(material.czdPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>热稳定性能:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(material.rwdxPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>熔体质量流动速率实验结果:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(material.rtzlPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>水分含量实验结果:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(material.sfjcPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>炭黑含量实验结果:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(material.thPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>原材料复检报告:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(material.fjbgPictureId)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse2" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/TR_item2_produceInfo.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>生产信息</span>
                        </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body">
                            <table className="table">
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>生产批次号:</td>
                                    <td className={this.valueClass}><a href={`/query?bc=${product.batchCode}&tc=${traceCode}`} target='_blank'>{product.batchCode}</a></td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>品牌:</td>
                                    <td className={this.valueClass}>{product.brand}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>执行标准:</td>
                                    <td className={this.valueClass}>{product.standard}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>产品名称:</td>
                                    <td className={this.valueClass}>{product.productName}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>规格型号:</td>
                                    <td className={this.valueClass}>{product.spec}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>生产车间:</td>
                                    <td className={this.valueClass}>{product.orgName}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>生产线:</td>
                                    <td className={this.valueClass}>{product.lineName}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>班次:</td>
                                    <td className={this.valueClass}>{product.className}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>班长:</td>
                                    <td className={this.valueClass}>{product.monitor}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>操作工:</td>
                                    <td className={this.valueClass}>{product.jockey}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>机修工:</td>
                                    <td className={this.valueClass}>{product.mechanic}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>生产时间:</td>
                                    <td className={this.valueClass}>{product.endTime}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse3" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/TR_item3_order.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>订单信息</span>
                        </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body">
                            <table className="table">
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>订单编号:</td>
                                    <td className={this.valueClass}>None</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>订单员:</td>
                                    <td className={this.valueClass}>None</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>客户名称:</td>
                                    <td className={this.valueClass}>None</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>产品出厂时间:</td>
                                    <td className={this.valueClass}>None</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>发货员:</td>
                                    <td className={this.valueClass}>None</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse4" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/TR_item4_QA.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>质检信息</span>
                        </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse">
                        <div className="panel-body">
                            <table className="table">
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>实验日期:</td>
                                    <td className={this.valueClass}>{inspection.createTime}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>拉伸试验:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(inspection.lssyPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>静液压检测:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(inspection.jyyjcPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>熔体质量流动速率:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(inspection.rtzlPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>热稳定性能:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(inspection.rwdxPictureId)}</td>
                                </tr>
                                <tr style={this.styles.tableRow}>
                                    <td className={this.keyClass}>出厂检验报告:</td>
                                    <td className={this.valueClass}>{this.getImageComponent(inspection.ccjsPictureId)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showImage} onClose={this.onImageViewerClose}>
                    <img src={this.state.imageUrl} style={{maxWidth: '90%', maxHeight: '90%', margin: 'auto', position: 'absolute',top: '0',bottom: '0',left: '0',right: '0'}} />
                </Modal>
            </div> 
        );
    }
}

TraceCodeDetail.propTypes = {
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
        rwdxPictureId: React.PropTypes.string,
        fjbgPictureId: React.PropTypes.string,
        rtzlPictureId: React.PropTypes.string,
        sfjcPictureId: React.PropTypes.string,
        thPictureId: React.PropTypes.string,
    }),
    order: React.PropTypes.shape({}),
    inspection: React.PropTypes.shape({
        produceBatch: React.PropTypes.string,
        createTime: React.PropTypes.string,
        lssyPictureId: React.PropTypes.string,
        jyyjcPictureId: React.PropTypes.string,
        rtzlPictureId: React.PropTypes.string,
        rwdxPictureId: React.PropTypes.string,
        ccjsPictureId: React.PropTypes.string,
    }),
    traceCode: React.PropTypes.string,
};

