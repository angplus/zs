package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.CsbjcPda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CsbjcPadRepository extends CrudRepository<CsbjcPda, String> {
    List<CsbjcPda> findTop100ByBatchCodeOrderByTsDesc(String batchCode);
}
