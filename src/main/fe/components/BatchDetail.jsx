import React from 'react';
import { Color } from '../common/Constants';
import { getDate, formateNumber } from '../common/Utils';

export default class BatchDetail extends React.Component {

    constructor(props) {
        super(props)

        this.keyClass = "col-xs-6 col-sm-5";
        this.valueClass = "col-xs-6 col-sm-7";
        this.headerClass = "";
        this.dataClass = "";

        this.styles = {
            tableRow: {
                paddingTop:'3px'
            },
            panelShadow:{
                borderColor:Color.PanelHeaderBackground,
                boxShadow: '3px -3px 7px 2px #9e9d9d',
                marginTop:'10px',
                borderTopColor:'#33b0e8',
            },
            panelHeader: {
                backgroundColor: '#33b0e8',
                backgroundImage: '-webkit-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-moz-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-ms-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: '-o-linear-gradient(top, #33b0e8, #005ba1)',
                backgroundImage: 'linear-gradient(to bottom, #33b0e8, #005ba1)',
                color: '#ffffff',
            },
            images:{
                marginRight: '15px',
                display:'inline',
                width:'30px',
                height:'30px'
            },
            panelBody: {
                padding: '5px',
                overflowX: 'scroll',
                marginRight:'5px',
            },
            keyStyle: {
                paddingLeft: '5px',
                paddingRight: '5px',
            },
            valueStyle: {
                paddingLeft: '5px',
                paddingRight: '5px',
            },
            headerStyle: {
                paddingLeft: '5px',
                paddingRight: '5px',
                textAlign:'center',
                whiteSpace: 'nowrap',
                borderTop: '1px solid gray',
                borderBottom: '1px solid gray',
                backgroundColor:'#565a5f',
                color:'#fff',
                fontWeight:'normal',
                lineHeight:'35px',
            },
            dataStyle: {
                paddingLeft: '5px',
                paddingRight: '5px',
                whiteSpace: 'nowrap',
                textAlign:'center',
                borderBottom: '1px solid gray'
            },
        };

    }

    renderCsbjc(data, id) {
        return (
            <tr style={this.styles.tableRow} key={id}>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.line}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.batchCode}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.sbbh}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh3)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh4)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh5)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh6)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh7)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clbh8)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clnj)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.clwj)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.cltxd)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.cltyd)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.deviceNo}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.radius)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.startTime)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.endTime)}</td>
            </tr>
        );
    };
    renderHongLiaoTong(data, id){
        return (
            <tr style={this.styles.tableRow} key={id}>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.line}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.batchCode}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.deviceNo}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.gzwd1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.gzwd2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.hlry}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.startTime)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.endTime)}</td>
            </tr>
        );
    };
    renderJiChuJi(data, id){
        return (
            <tr style={this.styles.tableRow} key={id}>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.line}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.batchCode}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.jth}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.deviceNo}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.ylxlsjz)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.ylxlsjzlj)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.jtwd1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.jtwd2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.jtwd3)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.jtwd4)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.jtwd5)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd3)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd4)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd5)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd6)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd7)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd8)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd9)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd10)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd11)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mtwd12)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mxwd1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mxwd2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mxwd3)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mxwd4)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.qysd)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.lgzs)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.rtyl)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.rtwd)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.yljcl)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.mz)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.qgjs)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.dqcd)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.czg}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.wxry}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.startTime)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.endTime)}</td>
            </tr>
        );
    };
    renderPllq(data, id){
        return (
            <tr style={this.styles.tableRow} key={id}>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.line}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.line}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.deviceNo}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.wd1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.wd2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.yl1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.yl2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.startTime)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.endTime)}</td>
            </tr>
        );
    };
    renderDjx(data, id){
        return (
            <tr style={this.styles.tableRow} key={id}>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.line}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.batchCode}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{data.deviceNo}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.zkyl1, 4)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.zkyl2, 4)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.lqsy1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}></td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.lqswd1)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{formateNumber(data.lqswd2)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.startTime)}</td>
                <td className={this.dataClass} style={this.styles.dataStyle}>{getDate(data.endTime)}</td>
            </tr>
        );
    };


    render() {
        const { csbjc, hongLiaoTong, jiChuJi, pllq, djx } = this.props;

        return (
            <div className="panel-group" id="accordion" style={{fontSize: '1.0em'}}>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse1" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/item1_wave.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>超声波检测数据</span>
                        </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                        <div className="panel-body" style={this.styles.panelBody}>
                            <table className="table">
                                <tr>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>产线</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>生产批号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>设备编号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚3</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚4</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚5</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚6</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚7</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测壁厚8</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测内径</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测外径</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测同心度</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>超声波检测椭圆度</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>设备编号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>平均外径</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次开始时间</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次结束时间</th>
                                </tr>
                                {
                                    csbjc.map((data, index) => this.renderCsbjc(data, index))
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse2" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/item2_fuelTube.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px',paddingLeft:'1.5px',paddingRight:'1.5px'}}/>
                            </div>
                            <span>烘料筒数据</span>
                        </h4>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse">
                        <div className="panel-body" style={this.styles.panelBody}>
                            <table className="table">
                                <tr>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>产线</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>生产批号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>设备编号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>烘料桶干燥温度1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>烘料桶干燥温度2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>烘料人员</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次开始时间</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次结束时间</th>
                                </tr>
                                {
                                    hongLiaoTong.map((data, index) => this.renderHongLiaoTong(data, index))
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse3" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/item3_settings.png"  width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>挤出机数据</span>
                        </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse">
                        <div className="panel-body" style={this.styles.panelBody}>
                            <table className="table">
                                <tr>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>产线</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>生产批号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>机台号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>设备编号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>原料下料实际值</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>原料下料累计值</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>机筒温度1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>机筒温度2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>机筒温度3</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>机筒温度4</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>机筒温度5</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度3</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度4</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度5</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度6</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度7</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度8</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度9</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度10</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度11</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模头温度12</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模芯温度1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模芯温度2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模芯温度3</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>模芯温度4</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>牵引速度</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>螺杆转速</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>熔体压力</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>熔体温度</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>原料挤出量</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>米重</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>切割计数</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>当前长度</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>操作工</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>维修人员</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次开始时间</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次结束时间</th>
                                </tr>
                                {
                                    jiChuJi.map((data, index) => this.renderJiChuJi(data, index))
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse4" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/item4_cooling.png"  width='30px' style={{marginTop:'-10px',marginBottom:'-6px'}}/>
                            </div>
                            <span>喷淋冷却数据</span>
                        </h4>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse">
                        <div className="panel-body" style={this.styles.panelBody}>
                            <table className="table">
                                <tr>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>产线</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>生产批号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>冷却水温度1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>设备编号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>冷却水温度2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>冷却水压力1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>冷却水压力2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次开始时间</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次结束时间</th>
                                </tr>
                                {
                                    pllq.map((data, index) => this.renderPllq(data, index))
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default" style={this.styles.panelShadow}>
                    <div data-toggle="collapse" href="#collapse5" data-parent="#accordion" className="panel-heading" style={this.styles.panelHeader}>
                        <h4 className="panel-title">
                            <div style={this.styles.images}>
                                <img src="/images/item5_vacuumBox.png" width='30px' style={{marginTop:'-10px',marginBottom:'-6px',paddingLeft:'1px',paddingRight:'1px'}}/>
                            </div>
                            <span>真空定径箱数据</span>
                        </h4>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse">
                        <div className="panel-body" style={this.styles.panelBody}>
                            <table className="table">
                                <tr>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>产线</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>生产批号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>设备编号</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>真空压力1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>真空压力2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>冷却水温1</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>冷却水温2</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>一级冷却水温</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>二级冷却水温</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次开始时间</th>
                                    <th className={this.headerClass} style={this.styles.headerStyle}>批次结束时间</th>
                                </tr>
                                {
                                    djx.map((data, index) => this.renderDjx(data, index))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

BatchDetail.propTypes = {
    initialProps: React.PropTypes.shape({
        csbjc: React.PropTypes.arrayOf({
            batchCode: React.PropTypes.string,
            ts: React.PropTypes.string,
            line: React.PropTypes.string,
            sbbh: React.PropTypes.string,
            clbh1: React.PropTypes.number,
            clbh2: React.PropTypes.number,
            clbh3: React.PropTypes.number,
            clbh4: React.PropTypes.number,
            clbh5: React.PropTypes.number,
            clbh6: React.PropTypes.number,
            clbh7: React.PropTypes.number,
            clbh8: React.PropTypes.number,
            clnj: React.PropTypes.number,
            clwj: React.PropTypes.number,
            cltxd: React.PropTypes.number,
            cltyd: React.PropTypes.number,
            deviceNo: React.PropTypes.string,
            traceCode: React.PropTypes.string,
            radius: React.PropTypes.string,
            startTime: React.PropTypes.number,
            endTime: React.PropTypes.number,
        }),
        djx: React.PropTypes.arrayOf({
            batchCode: React.PropTypes.string,
            ts: React.PropTypes.string,
            line: React.PropTypes.string,
            sbbh: React.PropTypes.string,
            zkyl1: React.PropTypes.number,
            zkyl2: React.PropTypes.number,
            lqsy1: React.PropTypes.number,
            lqswd1: React.PropTypes.number,
            lqswd2: React.PropTypes.number,
            startTime: React.PropTypes.number,
            endTime: React.PropTypes.number,
        }),
        hongLiaoTong: React.PropTypes.arrayOf({
            batchCode: React.PropTypes.string,
            ts: React.PropTypes.string,
            line: React.PropTypes.string,
            sbbh: React.PropTypes.string,
            gzwd1: React.PropTypes.number,
            gzwd2: React.PropTypes.number,
            hlry: React.PropTypes.string,
            startTime: React.PropTypes.number,
            endTime: React.PropTypes.number,
        }),
        jiChuJi: React.PropTypes.arrayOf({
            batchCode: React.PropTypes.string,
            ts: React.PropTypes.string,
            line: React.PropTypes.string,
            jth: React.PropTypes.string,
            sbbh: React.PropTypes.string,
            ylxlsjz: React.PropTypes.number,
            ylxlsjzlj: React.PropTypes.number,
            jtwd1: React.PropTypes.number,
            jtwd2: React.PropTypes.number,
            jtwd3: React.PropTypes.number,
            jtwd4: React.PropTypes.number,
            jtwd5: React.PropTypes.number,
            mtwd1: React.PropTypes.number,
            mtwd2: React.PropTypes.number,
            mtwd3: React.PropTypes.number,
            mtwd4: React.PropTypes.number,
            mtwd5: React.PropTypes.number,
            mtwd6: React.PropTypes.number,
            mtwd7: React.PropTypes.number,
            mtwd8: React.PropTypes.number,
            mtwd9: React.PropTypes.number,
            mtwd10: React.PropTypes.number,
            mtwd11: React.PropTypes.number,
            mtwd12: React.PropTypes.number,
            mxwd1: React.PropTypes.number,
            mxwd2: React.PropTypes.number,
            mxwd3: React.PropTypes.number,
            mxwd4: React.PropTypes.number,
            qysd: React.PropTypes.number,
            lgzs: React.PropTypes.number,
            rtyl: React.PropTypes.number,
            rtwd: React.PropTypes.number,
            yljcl: React.PropTypes.number,
            mz: React.PropTypes.number,
            qgjs: React.PropTypes.number,
            dqcd: React.PropTypes.number,
            czg: React.PropTypes.string,
            wxry: React.PropTypes.string,
            startTime: React.PropTypes.number,
            endTime: React.PropTypes.number,
        }),
        pllq: React.PropTypes.arrayOf({
            batchCode: React.PropTypes.string,
            ts: React.PropTypes.string,
            line: React.PropTypes.string,
            sbbh: React.PropTypes.string,
            wd1: React.PropTypes.number,
            wd2: React.PropTypes.number,
            yl1: React.PropTypes.number,
            yl2: React.PropTypes.number,
            startTime: React.PropTypes.number,
            endTime: React.PropTypes.number,
        }),
    }),
};

