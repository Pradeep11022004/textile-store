package com.textile.textile_store.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.textile.textile_store.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}