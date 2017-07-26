package com.ktsj.zs.entities.bur;

import javax.persistence.*;

@Entity
@NamedNativeQuery(
        name = "ProductBasic.getProductBasic",
        query = "select p.TraceCode, p.ScheduleID, k.ProductName, k.Brand, k.Spec, k.BatchCode, k.Standard, k.EndTime from ProductDateTable p join `kangtai-shengchanpaiban_pda` k on p.BatchCode = k.BatchCode where p.TraceCode = :traceCode",
        resultClass = ProductBasic.class
)
public class ProductBasic {

    @Id
    @Column(name = "ScheduleID")
    private String scheduleId;

    @Column(name = "TraceCode")
    private String traceCode;

    @Column(name = "ProductName")
    private String productName;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Spec")
    private String spec;

    @Column(name = "BatchCode")
    private String batchCode;

    @Column(name = "Standard")
    private String standard;

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

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getSpec() {
        return spec;
    }

    public void setSpec(String spec) {
        this.spec = spec;
    }

    public String getBatchCode() {
        return batchCode;
    }

    public void setBatchCode(String batchCode) {
        this.batchCode = batchCode;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

}
