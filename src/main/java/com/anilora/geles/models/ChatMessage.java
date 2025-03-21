package com.anilora.geles.models;

public class ChatMessage {

    private String sender;
    private String content;

    // Default constructor
    public ChatMessage() {
    }

    // Constructor with parameters
    public ChatMessage(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }

    // Getters and Setters
    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
