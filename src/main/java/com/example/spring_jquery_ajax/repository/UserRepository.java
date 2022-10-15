package com.example.spring_jquery_ajax.repository;

import com.example.spring_jquery_ajax.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
