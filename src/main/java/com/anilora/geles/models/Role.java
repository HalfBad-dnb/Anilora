package com.anilora.geles.models;

public class Role {

    private String username;
    private String role;

    public Role() {
    }

    public Role(String username, String role) {
        this.username = username;
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public String getRole() {
        return role;
    }

}
