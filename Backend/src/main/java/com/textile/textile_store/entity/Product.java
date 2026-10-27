package com.textile.textile_store.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 150)
    @Column(nullable = false, length = 150)
    private String name;

    @NotBlank
    @Size(max = 100)
    @Column(nullable = false, length = 100)
    private String material;

    @NotBlank
    @Size(max = 50)
    @Column(nullable = false, length = 50)
    private String color;

    @NotNull
    @DecimalMin(value = "0.01")
    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal pricePerMetre;

    @NotNull
    @DecimalMin(value = "0.00")
    @Column(nullable = false, precision = 12, scale = 3)
    private BigDecimal stockMetres = BigDecimal.ZERO;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    public Product() {
    }

    public Product(String name, String material, String color,
                   BigDecimal pricePerMetre,
                   BigDecimal stockMetres) {
        this.name = name;
        this.material = material;
        this.color = color;
        this.pricePerMetre = pricePerMetre;
        this.stockMetres = stockMetres;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public BigDecimal getPricePerMetre() {
        return pricePerMetre;
    }

    public void setPricePerMetre(BigDecimal pricePerMetre) {
        this.pricePerMetre = pricePerMetre;
    }

    public BigDecimal getStockMetres() {
        return stockMetres;
    }

    public void setStockMetres(BigDecimal stockMetres) {
        this.stockMetres = stockMetres;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}