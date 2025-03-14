package com.anilora.geles.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.anilora.geles.models.Role;

@Repository
public interface LogInRepository extends JpaRepository<Role, Long> {
    // You can define custom queries here if needed
}
