package com.ktsj.zs.repositories.bur;

import com.ktsj.zs.entities.bur.HongLiaoTongPda;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HongLiaoTongPdaRepository extends CrudRepository<HongLiaoTongPda, String> {
    List<HongLiaoTongPda> findTop100ByBatchCodeOrderByTsDesc(String batchCode);
}
