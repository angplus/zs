package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.persistence.EntityManager;
import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {

    @Query(nativeQuery = true)
    List<Order> getOrder(@Param("id") Long id);

}
