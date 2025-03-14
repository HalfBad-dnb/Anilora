package com.anilora.geles.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional; // Ensure Optional is imported
import com.anilora.geles.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

    // Custom query method to find a user by username
    Optional<User> findByUsername(String username);

}
