package com.anilora.geles.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anilora.geles.models.User;
import com.anilora.geles.exceptions.UserNotFoundException;
import com.anilora.geles.repositories.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Method to retrieve a user by id
    public User getUserById(Long userId) throws UserNotFoundException {
        // Fetch the user from the repository by ID
        return userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found with id: " + userId));
    }

    // Method to retrieve a user by username
    public User getUserByUsername(String username) throws UserNotFoundException {
        // Fetch the user from the repository by username
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException("User not found with username: " + username));
    }

    // Optional: Method to create or update a user
    public User createOrUpdateUser(User user) {
        return userRepository.save(user); // Save or update user based on existence
    }
}
