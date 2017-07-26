package com.ktsj.zs.entities.bur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "`kangtai-jichuji_pda`")
public class JiChuJiPda {

    @Id
    @Column(name="id")
    private Long id;

    @Column(name="pch")
    private String batchCode;

    @Column(name="ts")
    private String ts;

    @Column(name="ts_switch_mark")
    private String tsSwitchMark;

    @Column(name="project")
    private String project;

    @Column(name="instance")
    private String instance;

    @Column(name="rec_rate")
    private String recRate;

    @Column(name="equip_id")
    private String equipId;

    @Column(name="line")
    private String line;

    @Column(name="jth")
    private String jth;

    @Column(name="sbbh")
    private String sbbh;

    @Column(name="ylxlsjz")
    private Double ylxlsjz;

    @Column(name="ylxlsjzlj")
    private Double ylxlsjzlj;

    @Column(name="jtwd1")
    private Double jtwd1;

    @Column(name="jtwd2")
    private Double jtwd2;

    @Column(name="jtwd3")
    private Double jtwd3;

    @Column(name="jtwd4")
    private Double jtwd4;

    @Column(name="jtwd5")
    private Double jtwd5;

    @Column(name="mtwd1")
    private Double mtwd1;

    @Column(name="mtwd2")
    private Double mtwd2;

    @Column(name="mtwd3")
    private Double mtwd3;

    @Column(name="mtwd4")
    private Double mtwd4;

    @Column(name="mtwd5")
    private Double mtwd5;

    @Column(name="mtwd6")
    private Double mtwd6;

    @Column(name="mtwd7")
    private Double mtwd7;

    @Column(name="mtwd8")
    private Double mtwd8;

    @Column(name="mtwd9")
    private Double mtwd9;

    @Column(name="mtwd10")
    private Double mtwd10;

    @Column(name="mtwd11")
    private Double mtwd11;

    @Column(name="mtwd12")
    private Double mtwd12;

    @Column(name="mxwd1")
    private Double mxwd1;

    @Column(name="mxwd2")
    private Double mxwd2;

    @Column(name="mxwd3")
    private Double mxwd3;

    @Column(name="mxwd4")
    private Double mxwd4;

    @Column(name="qysd")
    private Double qysd;

    @Column(name="lgzs")
    private Double lgzs;

    @Column(name="rtyl")
    private Double rtyl;

    @Column(name="rtwd")
    private Double rtwd;

    @Column(name="yljcl")
    private Double yljcl;

    @Column(name="mz")
    private Double mz;

    @Column(name="qgjs")
    private Double qgjs;

    @Column(name="dqcd")
    private Double dqcd;

    @Column(name="czg")
    private String czg;

    @Column(name="wxry")
    private String wxry;

    @Column(name="pch_starttime")
    private Double startTime;

    @Column(name="pch_endtime")
    private Double endTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBatchCode() {
        return batchCode;
    }

    public void setBatchCode(String batchCode) {
        this.batchCode = batchCode;
    }

    public String getTs() {
        return ts;
    }

    public void setTs(String ts) {
        this.ts = ts;
    }

    public String getTsSwitchMark() {
        return tsSwitchMark;
    }

    public void setTsSwitchMark(String tsSwitchMark) {
        this.tsSwitchMark = tsSwitchMark;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public String getInstance() {
        return instance;
    }

    public void setInstance(String instance) {
        this.instance = instance;
    }

    public String getRecRate() {
        return recRate;
    }

    public void setRecRate(String recRate) {
        this.recRate = recRate;
    }

    public String getEquipId() {
        return equipId;
    }

    public void setEquipId(String equipId) {
        this.equipId = equipId;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public String getSbbh() {
        return sbbh;
    }

    public void setSbbh(String sbbh) {
        this.sbbh = sbbh;
    }

    public Double getYlxlsjz() {
        return ylxlsjz;
    }

    public void setYlxlsjz(Double ylxlsjz) {
        this.ylxlsjz = ylxlsjz;
    }

    public Double getYlxlsjzlj() {
        return ylxlsjzlj;
    }

    public void setYlxlsjzlj(Double ylxlsjzlj) {
        this.ylxlsjzlj = ylxlsjzlj;
    }

    public Double getJtwd1() {
        return jtwd1;
    }

    public void setJtwd1(Double jtwd1) {
        this.jtwd1 = jtwd1;
    }

    public Double getJtwd2() {
        return jtwd2;
    }

    public void setJtwd2(Double jtwd2) {
        this.jtwd2 = jtwd2;
    }

    public Double getJtwd3() {
        return jtwd3;
    }

    public void setJtwd3(Double jtwd3) {
        this.jtwd3 = jtwd3;
    }

    public Double getJtwd4() {
        return jtwd4;
    }

    public void setJtwd4(Double jtwd4) {
        this.jtwd4 = jtwd4;
    }

    public Double getJtwd5() {
        return jtwd5;
    }

    public void setJtwd5(Double jtwd5) {
        this.jtwd5 = jtwd5;
    }

    public Double getMtwd1() {
        return mtwd1;
    }

    public void setMtwd1(Double mtwd1) {
        this.mtwd1 = mtwd1;
    }

    public Double getMtwd2() {
        return mtwd2;
    }

    public void setMtwd2(Double mtwd2) {
        this.mtwd2 = mtwd2;
    }

    public Double getMtwd3() {
        return mtwd3;
    }

    public void setMtwd3(Double mtwd3) {
        this.mtwd3 = mtwd3;
    }

    public Double getMtwd4() {
        return mtwd4;
    }

    public void setMtwd4(Double mtwd4) {
        this.mtwd4 = mtwd4;
    }

    public Double getMtwd5() {
        return mtwd5;
    }

    public void setMtwd5(Double mtwd5) {
        this.mtwd5 = mtwd5;
    }

    public Double getMtwd6() {
        return mtwd6;
    }

    public void setMtwd6(Double mtwd6) {
        this.mtwd6 = mtwd6;
    }

    public Double getMtwd7() {
        return mtwd7;
    }

    public void setMtwd7(Double mtwd7) {
        this.mtwd7 = mtwd7;
    }

    public Double getMtwd8() {
        return mtwd8;
    }

    public void setMtwd8(Double mtwd8) {
        this.mtwd8 = mtwd8;
    }

    public Double getMtwd9() {
        return mtwd9;
    }

    public void setMtwd9(Double mtwd9) {
        this.mtwd9 = mtwd9;
    }

    public Double getMtwd10() {
        return mtwd10;
    }

    public void setMtwd10(Double mtwd10) {
        this.mtwd10 = mtwd10;
    }

    public Double getMtwd11() {
        return mtwd11;
    }

    public void setMtwd11(Double mtwd11) {
        this.mtwd11 = mtwd11;
    }

    public Double getMtwd12() {
        return mtwd12;
    }

    public void setMtwd12(Double mtwd12) {
        this.mtwd12 = mtwd12;
    }

    public Double getMxwd1() {
        return mxwd1;
    }

    public void setMxwd1(Double mxwd1) {
        this.mxwd1 = mxwd1;
    }

    public Double getMxwd2() {
        return mxwd2;
    }

    public void setMxwd2(Double mxwd2) {
        this.mxwd2 = mxwd2;
    }

    public Double getMxwd3() {
        return mxwd3;
    }

    public void setMxwd3(Double mxwd3) {
        this.mxwd3 = mxwd3;
    }

    public Double getMxwd4() {
        return mxwd4;
    }

    public void setMxwd4(Double mxwd4) {
        this.mxwd4 = mxwd4;
    }

    public Double getQysd() {
        return qysd;
    }

    public void setQysd(Double qysd) {
        this.qysd = qysd;
    }

    public Double getLgzs() {
        return lgzs;
    }

    public void setLgzs(Double lgzs) {
        this.lgzs = lgzs;
    }

    public Double getRtyl() {
        return rtyl;
    }

    public void setRtyl(Double rtyl) {
        this.rtyl = rtyl;
    }

    public Double getRtwd() {
        return rtwd;
    }

    public void setRtwd(Double rtwd) {
        this.rtwd = rtwd;
    }

    public Double getYljcl() {
        return yljcl;
    }

    public void setYljcl(Double yljcl) {
        this.yljcl = yljcl;
    }

    public Double getMz() {
        return mz;
    }

    public void setMz(Double mz) {
        this.mz = mz;
    }

    public Double getQgjs() {
        return qgjs;
    }

    public void setQgjs(Double qgjs) {
        this.qgjs = qgjs;
    }

    public Double getDqcd() {
        return dqcd;
    }

    public void setDqcd(Double dqcd) {
        this.dqcd = dqcd;
    }

    public String getCzg() {
        return czg;
    }

    public void setCzg(String czg) {
        this.czg = czg;
    }

    public String getWxry() {
        return wxry;
    }

    public void setWxry(String wxry) {
        this.wxry = wxry;
    }

    public Double getStartTime() {
        return startTime;
    }

    public void setStartTime(Double startTime) {
        this.startTime = startTime;
    }

    public Double getEndTime() {
        return endTime;
    }

    public void setEndTime(Double endTime) {
        this.endTime = endTime;
    }
}
