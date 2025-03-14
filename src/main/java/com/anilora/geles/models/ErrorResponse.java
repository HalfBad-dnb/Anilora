package com.anilora.geles.models;

public class ErrorResponse {

    private String message;
    private int statusCode;

    // Constructor
    public ErrorResponse(String message) {
        this.message = message;
    }

    // Getter and Setter for message
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // Getter and Setter for statusCode
    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
}
