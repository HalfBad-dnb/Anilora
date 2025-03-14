package com.anilora.geles.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    // Rename this method to hashPassword
    public String hashPassword(String password) {
        return bCryptPasswordEncoder.encode(password);
    }

    // Method to check if the raw password matches the encoded password
    public boolean matches(String rawPassword, String encodedPassword) {
        return bCryptPasswordEncoder.matches(rawPassword, encodedPassword);
    }
}
