package com.ktsj.zs.entities.bur;

import javax.persistence.*;

@Entity
@NamedNativeQuery(
        name = "Production.getProduction",
        query = "select p.TraceCode, k.* from ProductDateTable p left join `kangtai-shengchanpaiban_pda` k on p.BatchCode = k.BatchCode where p.TraceCode = :traceCode",
        resultClass = Production.class
)
public class Production {

    @Id
    @Column(name = "ScheduleID")
    private String scheduleId;

    @Column(name = "TraceCode")
    private String traceCode;

    @Column(name = "BatchCode")
    private String batchCode;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Standard")
    private String standard;

    @Column(name = "ProductName")
    private String productName;

    @Column(name = "Spec")
    private String spec;

    @Column(name = "OrgName")
    private String orgName;

    @Column(name = "LineName")
    private String lineName;

    @Column(name = "ClassName")
    private String className;

    @Column(name = "Monitor")
    private String monitor;

    @Column(name = "Jockey")
    private String jockey;

    @Column(name = "Mechanic")
    private String mechanic;

    @Column(name = "EndTime")
    private String endTime;

    public String getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(String scheduleId) {
        this.scheduleId = scheduleId;
    }

    public String getTraceCode() {
        return traceCode;
    }

    public void setTraceCode(String traceCode) {
        this.traceCode = traceCode;
    }

    public String getBatchCode() {
        return batchCode;
    }

    public void setBatchCode(String batchCode) {
        this.batchCode = batchCode;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    public String getLineName() {
        return lineName;
    }

    public void setLineName(String lineName) {
        this.lineName = lineName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getMonitor() {
        return monitor;
    }

    public void setMonitor(String monitor) {
        this.monitor = monitor;
    }

    public String getJockey() {
        return jockey;
    }

    public void setJockey(String jockey) {
        this.jockey = jockey;
    }

    public String getMechanic() {
        return mechanic;
    }

    public void setMechanic(String mechanic) {
        this.mechanic = mechanic;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

}
