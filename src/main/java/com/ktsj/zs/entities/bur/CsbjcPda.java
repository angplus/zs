package com.ktsj.zs.entities.bur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "`kangtai-csbjc_pda`")
public class CsbjcPda {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name="pch")
    private  String batchCode;

    @Column (name="ts")
    private String ts;

    @Column(name="ts_switch_mark")
    private String tsSwitchMark;

    @Column(name="project")
    private  String project;

    @Column(name="instance")
    private  String instance;

    @Column(name="rec_rate")
    private  String recRate;

    @Column(name="equip_id")
    private  String equipId;

    @Column(name="line")
    private  String line;

    @Column(name="sbbh")
    private  String sbbh;

    @Column(name="clbh1")
    private  Double clbh1;

    @Column(name="clbh2")
    private  Double clbh2;

    @Column(name="clbh3")
    private  Double clbh3;

    @Column(name="clbh4")
    private  Double clbh4;

    @Column(name="clbh5")
    private  Double clbh5;

    @Column(name="clbh6")
    private  Double clbh6;

    @Column(name="clbh7")
    private  Double clbh7;

    @Column(name="clbh8")
    private  Double clbh8;

    @Column(name="clnj")
    private  Double clnj;

    @Column(name="clwj")
    private  Double clwj;

    @Column(name="cltxd")
    private  Double cltxd;

    @Column(name="cltyd")
    private  Double cltyd;

    @Column(name="deviceno")
    private  String deviceNo;

    @Column(name="tracecode")
    private  String traceCode;

    @Column(name="radius")
    private  String radius;

    @Column(name="pch_starttime")
    private  Double startTime;

    @Column(name="pch_endtime")
    private  Double endTime;

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

    public Double getClbh1() {
        return clbh1;
    }

    public void setClbh1(Double clbh1) {
        this.clbh1 = clbh1;
    }

    public Double getClbh2() {
        return clbh2;
    }

    public void setClbh2(Double clbh2) {
        this.clbh2 = clbh2;
    }

    public Double getClbh3() {
        return clbh3;
    }

    public void setClbh3(Double clbh3) {
        this.clbh3 = clbh3;
    }

    public Double getClbh4() {
        return clbh4;
    }

    public void setClbh4(Double clbh4) {
        this.clbh4 = clbh4;
    }

    public Double getClbh5() {
        return clbh5;
    }

    public void setClbh5(Double clbh5) {
        this.clbh5 = clbh5;
    }

    public Double getClbh6() {
        return clbh6;
    }

    public void setClbh6(Double clbh6) {
        this.clbh6 = clbh6;
    }

    public Double getClbh7() {
        return clbh7;
    }

    public void setClbh7(Double clbh7) {
        this.clbh7 = clbh7;
    }

    public Double getClbh8() {
        return clbh8;
    }

    public void setClbh8(Double clbh8) {
        this.clbh8 = clbh8;
    }

    public Double getClnj() {
        return clnj;
    }

    public void setClnj(Double clnj) {
        this.clnj = clnj;
    }

    public Double getClwj() {
        return clwj;
    }

    public void setClwj(Double clwj) {
        this.clwj = clwj;
    }

    public Double getCltxd() {
        return cltxd;
    }

    public void setCltxd(Double cltxd) {
        this.cltxd = cltxd;
    }

    public Double getCltyd() {
        return cltyd;
    }

    public void setCltyd(Double cltyd) {
        this.cltyd = cltyd;
    }

    public String getDeviceNo() {
        return deviceNo;
    }

    public void setDeviceNo(String deviceNo) {
        this.deviceNo = deviceNo;
    }

    public String getTraceCode() {
        return traceCode;
    }

    public void setTraceCode(String traceCode) {
        this.traceCode = traceCode;
    }

    public String getRadius() {
        return radius;
    }

    public void setRadius(String radius) {
        this.radius = radius;
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
