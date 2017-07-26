package com.ktsj.zs.entities.bur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "`kangtai-pllq_pda`")
public class PllqPda {

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

    @Column(name="wd1")
    private Double wd1;

    @Column(name="wd2")
    private Double wd2;

    @Column(name="yl1")
    private Double yl1;

    @Column(name="yl2")
    private Double yl2;

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

    public Double getWd1() {
        return wd1;
    }

    public void setWd1(Double wd1) {
        this.wd1 = wd1;
    }

    public Double getWd2() {
        return wd2;
    }

    public void setWd2(Double wd2) {
        this.wd2 = wd2;
    }

    public Double getYl1() {
        return yl1;
    }

    public void setYl1(Double yl1) {
        this.yl1 = yl1;
    }

    public Double getYl2() {
        return yl2;
    }

    public void setYl2(Double yl2) {
        this.yl2 = yl2;
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
