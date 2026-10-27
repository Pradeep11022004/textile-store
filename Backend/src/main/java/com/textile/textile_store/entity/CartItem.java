package com.textile.textile_store.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "cart_items",
       indexes = {
           @Index(name = "idx_cart_user", columnList = "user_id")
       })
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @NotNull
    @DecimalMin(value = "0.001")
    @Column(nullable = false, precision = 10, scale = 3)
    private BigDecimal quantityMetres;

    public CartItem() {
    }

    public CartItem(User user, Product product,
                    BigDecimal quantityMetres) {
        this.user = user;
        this.product = product;
        this.quantityMetres = quantityMetres;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public BigDecimal getQuantityMetres() {
        return quantityMetres;
    }

    public void setQuantityMetres(BigDecimal quantityMetres) {
        this.quantityMetres = quantityMetres;
    }
}