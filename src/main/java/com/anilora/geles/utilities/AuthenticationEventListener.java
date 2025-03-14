package com.anilora.geles.utilities;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationEventListener {
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationEventListener.class);

    // Event listener for successful authentication
    @EventListener
    public void onAuthenticationSuccess(AuthenticationSuccessEvent event) {
        String username = event.getAuthentication().getName();
        logger.info("User logged in: {}", username);
    }
}
