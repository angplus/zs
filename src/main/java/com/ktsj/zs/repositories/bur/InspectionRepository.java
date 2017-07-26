package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.Inspection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InspectionRepository extends CrudRepository<Inspection, Long> {

    @Query(nativeQuery = true)
    List<Inspection> getInspection(@Param("batchCode") String batchCode);

}
