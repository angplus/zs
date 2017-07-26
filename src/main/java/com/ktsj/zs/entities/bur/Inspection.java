package com.ktsj.zs.entities.bur;

import javax.persistence.*;
import java.util.Date;

@Entity
@NamedNativeQuery(
        name = "Inspection.getInspection",
        query = "select p.checkdata_id, p.produce_batch, p.creat_time, p.lssy_picture_id, p.jyyjc_picture_id, p.rtzl_picture_id, p.rwdx_picture_id, p.ccjc_picture_id from `pic_product_checkdata` p where produce_batch = :batchCode",
        resultClass = Inspection.class
)
public class Inspection {

    @Id
    @Column(name = "checkdata_id")
    private Long id;

    @Column(name = "produce_batch")
    private String produceBatch;

    @Column(name = "creat_Time")
    private String createTime;

    @Column(name = "lssy_picture_id")
    private String lssyPictureId;

    @Column(name = "jyyjc_picture_id")
    private String jyyjcPictureId;

    @Column(name = "rtzl_picture_id")
    private String rtzlPictureId;

    @Column(name = "rwdx_picture_id")
    private String rwdxPictureId;

    @Column(name = "ccjc_picture_id")
    private String ccjsPictureId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduceBatch() {
        return produceBatch;
    }

    public void setProduceBatch(String produceBatch) {
        this.produceBatch = produceBatch;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getLssyPictureId() {
        return lssyPictureId;
    }

    public void setLssyPictureId(String lssyPictureId) {
        this.lssyPictureId = lssyPictureId;
    }

    public String getJyyjcPictureId() {
        return jyyjcPictureId;
    }

    public void setJyyjcPictureId(String jyyjcPictureId) {
        this.jyyjcPictureId = jyyjcPictureId;
    }

    public String getRtzlPictureId() {
        return rtzlPictureId;
    }

    public void setRtzlPictureId(String rtzlPictureId) {
        this.rtzlPictureId = rtzlPictureId;
    }

    public String getRwdxPictureId() {
        return rwdxPictureId;
    }

    public void setRwdxPictureId(String rwdxPictureId) {
        this.rwdxPictureId = rwdxPictureId;
    }

    public String getCcjsPictureId() {
        return ccjsPictureId;
    }

    public void setCcjsPictureId(String ccjsPictureId) {
        this.ccjsPictureId = ccjsPictureId;
    }
}
