package com.anilora.geles.models;

public class Registration {
    private String username;
    private String password;
    private String email;
    private String phone;
    private String address;

    public Registration() {
    }

    public Registration(String username, String password, String email, String phone, String address) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }   

}
