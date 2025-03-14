package com.anilora.geles.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.anilora.geles.services.UserService;
import com.anilora.geles.models.User;
import com.anilora.geles.models.ErrorResponse;
import com.anilora.geles.exceptions.UserNotFoundException;  // Ensure this is imported
import com.anilora.geles.security.CustomUserDetails;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    // Constructor-based dependency injection for UserService
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/info")
    public ResponseEntity<?> getCurrentUserInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        logger.debug("Current authentication: {}", authentication);
        
        if (authentication == null || !authentication.isAuthenticated()) {
            logger.warn("User not authenticated. Authentication: {}", authentication);
            return ResponseEntity.status(401)
                .body(new ErrorResponse("User not authenticated"));
        }

        logger.debug("Authentication principal type: {}", authentication.getPrincipal().getClass().getName());
        if (!(authentication.getPrincipal() instanceof CustomUserDetails)) {
            logger.warn("Invalid authentication type. Expected CustomUserDetails but got: {}", 
                authentication.getPrincipal().getClass().getName());
            return ResponseEntity.status(401)
                .body(new ErrorResponse("Invalid authentication type"));
        }

        try {
            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
            logger.debug("User details - userId: {}, username: {}", userDetails.getUserId(), userDetails.getUsername());
            
            // Fetch user details from the service
            User user = userService.getUserById(userDetails.getUserId());
            logger.debug("Found user: {}", user);
            
            // Return user info as response
            return ResponseEntity.ok(user);
        } catch (UserNotFoundException e) {
            // Custom exception handling if user is not found
            logger.error("User not found", e);
            return ResponseEntity.status(404)
                .body(new ErrorResponse("User not found"));
        } catch (Exception e) {
            // Generic exception handling for other errors
            logger.error("Failed to fetch user information", e);
            return ResponseEntity.status(500)
                .body(new ErrorResponse("Failed to fetch user information: " + e.getMessage()));
        }
    }
}
