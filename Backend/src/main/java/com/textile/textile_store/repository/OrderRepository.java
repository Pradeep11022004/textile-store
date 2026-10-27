package com.textile.textile_store.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.textile.textile_store.entity.Order;
import com.textile.textile_store.entity.OrderStatus;

public interface OrderRepository
        extends JpaRepository<Order, Long> {

    List<Order> findByUserId(Long userId);

    List<Order> findByStatus(OrderStatus status);

    List<Order> findByUserIdOrderByCreatedAtDesc(Long userId);
}