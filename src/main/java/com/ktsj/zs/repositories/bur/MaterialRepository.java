package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.Material;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MaterialRepository extends CrudRepository<Material, String> {

    @Query(nativeQuery = true)
    public List<Material> getMaterial(@Param("batch") String batch);

}
