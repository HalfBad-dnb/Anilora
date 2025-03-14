package com.anilora.geles.services;

import com.anilora.geles.models.User;
import com.anilora.geles.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private PasswordService passwordService;  // Password hashing service

    @Autowired
    private UserRepository userRepository;    // User repository to save users

    // Method to register a new user
    public boolean register(User user) {
        // Check if the user already exists
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return false;  // Return false if the user already exists
        }

        // Hash the password
        String hashedPassword = passwordService.hashPassword(user.getPassword());
        user.setPassword(hashedPassword);  // Set hashed password

        // Save the new user
        userRepository.save(user);

        return true;  // Return true if registration is successful
    }

    // Method to delete a user profile by username
    public void deleteProfile(String username) {
        userRepository.findByUsername(username).ifPresent(userRepository::delete);
    }

    // Method to get a user profile by username
    public User getProfile(String username) {
        return userRepository.findByUsername(username).orElse(null);  // Return user or null if not found
    }
}
