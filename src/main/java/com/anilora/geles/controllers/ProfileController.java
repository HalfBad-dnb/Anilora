package com.anilora.geles.controllers;

import com.anilora.geles.models.User;
import com.anilora.geles.services.ProfileService;
import com.anilora.geles.exceptions.UserNotFoundException;
import com.anilora.geles.exceptions.InvalidPasswordException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserProfile(@PathVariable Long userId) {
        try {
            User user = profileService.getUserProfile(userId);
            return ResponseEntity.ok(user);
        } catch (UserNotFoundException e) { // Better to catch specific exceptions
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Internal server error", "details", e.getMessage()));
        }
    }

    @PutMapping("/{userId}")
    public ResponseEntity<User> updateUserProfile(
            @PathVariable Long userId,
            @RequestBody User user) {
        try {
            User updatedUser = profileService.updateUserProfile(userId, user);
            return ResponseEntity.ok(updatedUser);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(null);
        }
    }

    @PutMapping("/{userId}/password")
    public ResponseEntity<Void> changePassword(
            @PathVariable Long userId,
            @RequestParam String oldPassword,
            @RequestParam String newPassword) {
        try {
            profileService.changePassword(userId, oldPassword, newPassword);
            return ResponseEntity.ok().build();
        } catch (InvalidPasswordException e) { // If there's any issue with old password
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(null);
        } catch (UserNotFoundException e) { // Handle case when user is not found
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(null);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserProfile(@PathVariable Long userId) {
        try {
            profileService.deleteUserProfile(userId);
            return ResponseEntity.ok().build();
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(null);
        }
    }
}
