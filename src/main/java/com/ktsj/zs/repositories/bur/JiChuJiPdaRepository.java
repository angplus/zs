package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.JiChuJiPda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JiChuJiPdaRepository extends CrudRepository<JiChuJiPda, String> {
    List<JiChuJiPda> findTop100ByBatchCodeOrderByTsDesc(String batchCode);
}
