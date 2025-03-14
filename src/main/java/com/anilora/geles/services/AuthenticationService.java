package com.anilora.geles.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.anilora.geles.repositories.UserRepository;
import com.anilora.geles.models.User;

@Service
public class AuthenticationService {

    @Autowired
    private PasswordService passwordService; // Inject PasswordService

    @Autowired
    private UserRepository userRepository; // Inject UserRepository

    // Method to authenticate a user
    public boolean authenticateUser(String username, String rawPassword) {
        // Retrieve the user by their username
        User user = userRepository.findByUsername(username).orElse(null);

        if (user != null) {
            // Compare the raw password with the stored encoded password
            return passwordService.matches(rawPassword, user.getPassword());
        }

        return false; // Return false if user is not found or passwords don't match
    }
}
