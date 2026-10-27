package com.textile.textile_store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.textile.textile_store.entity.Product;

public interface ProductRepository
        extends JpaRepository<Product, Long> {

    List<Product> findByNameContainingIgnoreCase(String name);

    List<Product> findByMaterialIgnoreCase(String material);

    List<Product> findByColorIgnoreCase(String color);

    List<Product> findByCategoryId(Long categoryId);
}