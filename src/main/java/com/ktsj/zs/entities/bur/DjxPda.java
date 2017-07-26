package com.ktsj.zs.entities.bur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "`kangtai-djx_pda`")
public class DjxPda {

    @Column(name="pch")
    private String batchCode;

    @Id
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

    @Column(name="sbbh")
    private String sbbh;

    @Column(name="zkyl1")
    private Double zkyl1;

    @Column(name="zkyl2")
    private Double zkyl2;

    @Column(name="lqsy1")
    private Double lqsy1;

    @Column(name="lqswd1")
    private Double lqswd1;

    @Column(name="lqswd2")
    private Double lqswd2;

    @Column(name="pch_starttime")
    private Double startTime;

    @Column(name="pch_endtime")
    private Double endTime;

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

    public Double getZkyl1() {
        return zkyl1;
    }

    public void setZkyl1(Double zkyl1) {
        this.zkyl1 = zkyl1;
    }

    public Double getZkyl2() {
        return zkyl2;
    }

    public void setZkyl2(Double zkyl2) {
        this.zkyl2 = zkyl2;
    }

    public Double getLqsy1() {
        return lqsy1;
    }

    public void setLqsy1(Double lqsy1) {
        this.lqsy1 = lqsy1;
    }

    public Double getLqswd1() {
        return lqswd1;
    }

    public void setLqswd1(Double lqswd1) {
        this.lqswd1 = lqswd1;
    }

    public Double getLqswd2() {
        return lqswd2;
    }

    public void setLqswd2(Double lqswd2) {
        this.lqswd2 = lqswd2;
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
