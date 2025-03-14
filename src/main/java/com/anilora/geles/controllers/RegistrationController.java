package com.anilora.geles.controllers;

import com.anilora.geles.models.User;
import com.anilora.geles.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/registration")
public class RegistrationController {

    private final RegistrationService registrationService;

    @Autowired
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    // Register a new user
    @PostMapping("/register")
    public boolean register(@RequestParam String username,
                            @RequestParam String password,
                            @RequestParam String email,
                            @RequestParam String phone,
                            @RequestParam String address) {
        // Create a new User object with the provided details
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);  // Password will be hashed in service
        user.setEmail(email);
        user.setPhoneNumber(phone);
        user.setAddress(address);

        // Call the registration service to register the user
        return registrationService.register(user);
    }

    // Delete the user profile
    @DeleteMapping("/delete/{username}")
    public void deleteProfile(@PathVariable String username) {
        registrationService.deleteProfile(username);
    }

    // Get user profile by username
    @GetMapping("/profile/{username}")
    public User getProfile(@PathVariable String username) {
        return registrationService.getProfile(username);
    }
}
