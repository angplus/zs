package com.ktsj.zs.entities.bur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "`kangtai-hongliaotong_pda`")
public class HongLiaoTongPda {

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

    @Column(name="gzwd1")
    private Double gzwd1;

    @Column(name="gzwd2")
    private Double gzwd2;

    @Column(name="hlry")
    private String hlry;

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

    public Double getGzwd1() {
        return gzwd1;
    }

    public void setGzwd1(Double gzwd1) {
        this.gzwd1 = gzwd1;
    }

    public Double getGzwd2() {
        return gzwd2;
    }

    public void setGzwd2(Double gzwd2) {
        this.gzwd2 = gzwd2;
    }

    public String getHlry() {
        return hlry;
    }

    public void setHlry(String hlry) {
        this.hlry = hlry;
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
