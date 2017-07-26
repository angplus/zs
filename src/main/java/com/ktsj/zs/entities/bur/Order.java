package com.ktsj.zs.entities.bur;

import javax.persistence.*;
import java.util.Date;

@Entity
@NamedNativeQuery(
        name = "Order.getOrder",
        query = "select b.BillID, u1.UserName as MakeBillBy, o.OrgName as Customer, b.SendTime, u2.UserName as SendBy from SendBill b left join SysUser u1 on b.MakeBillBy=u1.UserID left join SysOrg o on b.CusID=o.OrgID left join SysUser u2 on b.SendBy=u2.UserID where b.BillID=:id",
        resultClass = Order.class
)
public class Order {

    @Id
    @Column(name = "BillID")
    private Long id;

    @Column(name = "MakeBillBy")
    private String makeBillBy;

    @Column(name = "Customer")
    private String customer;

    @Column(name = "SendTime")
    private Date sendTime;

    @Column(name = "SendBy")
    private String sendBy;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMakeBillBy() {
        return makeBillBy;
    }

    public void setMakeBillBy(String makeBillBy) {
        this.makeBillBy = makeBillBy;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public String getSendBy() {
        return sendBy;
    }

    public void setSendBy(String sendBy) {
        this.sendBy = sendBy;
    }

}
