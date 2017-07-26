package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.ProductBasic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductBasicRepository extends CrudRepository<ProductBasic, String> {

    @Query(nativeQuery = true)
    List<ProductBasic> getProductBasic(@Param("traceCode") String traceCode);

}
