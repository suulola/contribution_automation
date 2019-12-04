package com.ecobank.server.repository;

import com.ecobank.server.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
//    User findByUsername(String username);
}

