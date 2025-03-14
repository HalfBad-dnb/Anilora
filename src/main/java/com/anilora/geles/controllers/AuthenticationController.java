package com.anilora.geles.controllers;

import com.anilora.geles.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    // Endpoint to login a user
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        boolean authenticated = authenticationService.authenticateUser(username, password);
        if (authenticated) {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }
}
