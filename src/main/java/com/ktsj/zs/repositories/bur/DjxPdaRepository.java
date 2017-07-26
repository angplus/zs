package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.DjxPda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DjxPdaRepository extends CrudRepository<DjxPda, String> {
    List<DjxPda> findTop100ByBatchCodeOrderByTsDesc(String batchCode);
}
