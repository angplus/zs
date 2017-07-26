package com.ktsj.zs.repositories.sa;

import com.ktsj.zs.entities.sa.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository  extends CrudRepository<Product, Long> {
}
