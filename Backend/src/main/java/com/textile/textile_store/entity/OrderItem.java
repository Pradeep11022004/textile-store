package com.textile.textile_store.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "order_items")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @NotNull
    @DecimalMin(value = "0.001")
    @Column(nullable = false, precision = 10, scale = 3)
    private BigDecimal quantityMetres;

    @NotNull
    @DecimalMin(value = "0.01")
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal pricePerMetre;

    @NotNull
    @DecimalMin(value = "0.00")
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal subtotal;

    public OrderItem() {
    }

    public OrderItem(Order order, Product product,
                     BigDecimal quantityMetres,
                     BigDecimal pricePerMetre,
                     BigDecimal subtotal) {
        this.order = order;
        this.product = product;
        this.quantityMetres = quantityMetres;
        this.pricePerMetre = pricePerMetre;
        this.subtotal = subtotal;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
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

    public BigDecimal getPricePerMetre() {
        return pricePerMetre;
    }

    public void setPricePerMetre(BigDecimal pricePerMetre) {
        this.pricePerMetre = pricePerMetre;
    }

    public BigDecimal getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(BigDecimal subtotal) {
        this.subtotal = subtotal;
    }
}
