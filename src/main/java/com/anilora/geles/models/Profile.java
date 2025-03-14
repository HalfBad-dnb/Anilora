package com.anilora.geles.models;

public class Profile {

    private String username;
    private String email;
    private String phone;
    private String address;

    public Profile() {
    }

    public Profile(String username, String email, String phone, String address) {
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public String getUsername() {
        return username;
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
