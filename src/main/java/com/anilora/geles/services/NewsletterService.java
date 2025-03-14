package com.anilora.geles.services;

import com.anilora.geles.models.Newsletter;
import com.anilora.geles.repositories.NewsletterRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NewsletterService {

    private final NewsletterRepository newsletterRepository;

    public NewsletterService(NewsletterRepository newsletterRepository) {
        this.newsletterRepository = newsletterRepository;
    }

    // Subscribe a user to the newsletter (add to database)
    public boolean subscribeUser(String email) {
        // Check if the email is already subscribed
        if (newsletterRepository.existsByEmail(email)) {
            return false; // Already subscribed
        }
        
        // Create and save the new subscription
        Newsletter newsletter = new Newsletter();
        newsletter.setEmail(email);
        newsletterRepository.save(newsletter);
        
        return true;
    }

    // Unsubscribe a user from the newsletter (remove from database)
    public boolean unsubscribeUser(String email) {
        Optional<Newsletter> subscription = newsletterRepository.findByEmail(email);
        
        if (subscription.isPresent()) {
            newsletterRepository.delete(subscription.get());
            return true; // Unsubscribed successfully
        }
        
        return false; // Email not found
    }

    // Get the subscription status for a given email
    public Optional<Newsletter> getSubscription(String email) {
        return newsletterRepository.findByEmail(email);
    }
}
