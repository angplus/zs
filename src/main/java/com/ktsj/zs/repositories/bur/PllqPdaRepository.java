package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.PllqPda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PllqPdaRepository extends CrudRepository<PllqPda, String> {
    List<PllqPda> findTop100ByBatchCodeOrderByTsDesc(String batchCode);
}
