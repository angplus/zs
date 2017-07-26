package com.ktsj.zs.repositories.kt;

import com.ktsj.zs.entities.kt.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findUserByUsername(String username);

    User findUserByUsernameAndPassword(String username, String password);

}
