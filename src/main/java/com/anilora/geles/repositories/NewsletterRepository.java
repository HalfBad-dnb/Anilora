package com.anilora.geles.repositories;

import com.anilora.geles.models.Newsletter;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface NewsletterRepository extends JpaRepository<Newsletter, Long> {

    // Method to find a subscription by email
    Optional<Newsletter> findByEmail(String email);

    // Method to check if an email already exists
    boolean existsByEmail(String email);
}
