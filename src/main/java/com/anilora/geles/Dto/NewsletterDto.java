package com.anilora.geles.Dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class NewsletterDto {

    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is required")
    private String email;

    // Default constructor
    public NewsletterDto() {}

    // Constructor with parameters
    public NewsletterDto(String email) {
        this.email = email;
    }

    // Getter and setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
