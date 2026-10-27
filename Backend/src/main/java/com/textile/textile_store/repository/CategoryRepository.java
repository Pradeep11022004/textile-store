package com.textile.textile_store.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.textile.textile_store.entity.Category;

public interface CategoryRepository
        extends JpaRepository<Category, Long> {

    Optional<Category> findByName(String name);

    boolean existsByName(String name);
}