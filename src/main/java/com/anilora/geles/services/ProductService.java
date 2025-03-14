package com.anilora.geles.services;

import com.anilora.geles.models.Product;
import com.anilora.geles.repositories.ProductRepository;
import com.anilora.geles.exceptions.ProductNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import jakarta.transaction.Transactional;
import java.util.List;



@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
    }

    @Transactional
    public Product createProduct(Product product) {
        // Handle any additional business logic before saving the product
        return productRepository.save(product);
    }

    @Transactional
    public Product updateProduct(Long id, Product updatedProduct) {
        // Check if the product exists
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
        
        // Update the fields that can be updated (for example, name and price)
        product.setName(updatedProduct.getName());
        product.setDescription(updatedProduct.getDescription());
        product.setPrice(updatedProduct.getPrice());
        product.setCategory(updatedProduct.getCategory());
        
        // Save and return the updated product
        return productRepository.save(product);
    }

    @Transactional
    public void deleteProduct(Long id) {
        // Check if the product exists
        Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found"));
        productRepository.delete(product);
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> searchProducts(String query) {
        return productRepository.findByNameContainingIgnoreCase(query);
    }

    @Transactional
    public String uploadProductImage(Long id, MultipartFile file) {
        // This is where you handle the file upload logic (saving to a file system, S3, etc.)
        // For now, you could implement a basic approach or save the file path to the database.
        // Example logic for handling image upload (you can enhance this)
        String fileName = id + "_" + file.getOriginalFilename();
        // Save the file to disk or cloud storage here
        // For simplicity, return the file name for now
        return fileName;
    }
}
