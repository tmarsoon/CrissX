package com.example.CrissX.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.CrissX.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}