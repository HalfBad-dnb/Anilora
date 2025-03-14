package com.anilora.geles.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    // Constructor to initialize BCryptPasswordEncoder
    public PasswordService() {
        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    // Method to encode the password
    public String encodePassword(String password) {
        return bCryptPasswordEncoder.encode(password);
    }

    // Method to check if the raw password matches the encoded password
    public boolean matches(String rawPassword, String encodedPassword) {
        return bCryptPasswordEncoder.matches(rawPassword, encodedPassword);
    }
}
