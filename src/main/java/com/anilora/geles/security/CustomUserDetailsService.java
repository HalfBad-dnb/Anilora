package com.anilora.geles.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.anilora.geles.services.UserService;
import com.anilora.geles.models.User;
import com.anilora.geles.exceptions.UserNotFoundException;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserService userService;

    public CustomUserDetailsService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Use UserService to get the user by username
        User user;
        try {
            user = userService.getUserByUsername(username);
        } catch (UserNotFoundException e) {
            throw new UsernameNotFoundException("User not found with username: " + username, e);
        }

        // Return the custom UserDetails object with roles
        CustomUserDetails customUserDetails = new CustomUserDetails(user, List.of("USER")); // Replace with actual roles as needed

        // Now you can access userId like this:
        Long userId = customUserDetails.getUserId();
        System.out.println("User ID: " + userId);  // You can use it as needed

        return customUserDetails;
    }
}
