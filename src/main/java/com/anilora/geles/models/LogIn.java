package com.anilora.geles.models;

public class LogIn {

    private String username;
    private String password;

    public LogIn() {
    }

    public LogIn(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

}
