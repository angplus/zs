package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.Production;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductionRepository extends CrudRepository<Production, String> {

    @Query(nativeQuery = true)
    public List<Production> getProduction(@Param("traceCode") String traceCode);

}
