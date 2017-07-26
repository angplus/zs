package com.ktsj.zs.entities.bur;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedNativeQuery;

@Entity
@NamedNativeQuery(
        name = "Material.getMaterial",
        query = "select b.material_batch, b.product_factory, b.orignName, b.czd_picture_id, c.rwdx_picture_id, c.fjbg_picture_id, c.rtzl_picture_id, c.sfjc_picture_id, c.th_picture_id from pic_material_baseinfo b left join pic_material_checkdata c on b.material_batch = c.material_batch left join pic_material_receivelist r on r.material_batch = b.material_batch where exists (select 1 from pic_material_receivelist r where r.produce_batch = :batch and r.material_batch = b.material_batch)",
        resultClass = Material.class
)
public class Material {

    @Id
    @Column(name = "material_batch")
    private String materialBatch;

    @Column(name = "product_factory")
    private String productFactory;

    @Column(name = "orignName")
    private String orignName;

    @Column(name = "czd_picture_id")
    private String czdPictureId;

    @Column(name = "rwdx_picture_id")
    private String rwdxPictureId;

    @Column(name = "fjbg_picture_id")
    private String fjbgPictureId;

    @Column(name = "rtzl_picture_id")
    private String rtzlPictureId;

    @Column(name = "sfjc_picture_id")
    private String sfjcPictureId;

    @Column(name = "th_picture_id")
    private String thPictureId;

    public String getMaterialBatch() {
        return materialBatch;
    }

    public void setMaterialBatch(String materialBatch) {
        this.materialBatch = materialBatch;
    }

    public String getProductFactory() {
        return productFactory;
    }

    public void setProductFactory(String productFactory) {
        this.productFactory = productFactory;
    }

    public String getOrignName() {
        return orignName;
    }

    public void setOrignName(String orignName) {
        this.orignName = orignName;
    }

    public String getCzdPictureId() {
        return czdPictureId;
    }

    public void setCzdPictureId(String czdPictureId) {
        this.czdPictureId = czdPictureId;
    }

    public String getRwdxPictureId() {
        return rwdxPictureId;
    }

    public void setRwdxPictureId(String rwdxPictureId) {
        this.rwdxPictureId = rwdxPictureId;
    }

    public String getFjbgPictureId() {
        return fjbgPictureId;
    }

    public void setFjbgPictureId(String fjbgPictureId) {
        this.fjbgPictureId = fjbgPictureId;
    }

    public String getRtzlPictureId() {
        return rtzlPictureId;
    }

    public void setRtzlPictureId(String rtzlPictureId) {
        this.rtzlPictureId = rtzlPictureId;
    }

    public String getSfjcPictureId() {
        return sfjcPictureId;
    }

    public void setSfjcPictureId(String sfjcPictureId) {
        this.sfjcPictureId = sfjcPictureId;
    }

    public String getThPictureId() {
        return thPictureId;
    }

    public void setThPictureId(String thPictureId) {
        this.thPictureId = thPictureId;
    }
}
