package com.anilora.geles.repositories;

import com.anilora.geles.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
    List<Product> findByNameContainingIgnoreCase(String query);  // Search by name (case insensitive)
}
