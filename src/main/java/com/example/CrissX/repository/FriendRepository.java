package com.example.CrissX.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.CrissX.model.Friend;

public interface FriendRepository extends JpaRepository<Friend, Long> {
    // Additional query methods if needed
}