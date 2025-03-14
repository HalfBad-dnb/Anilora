package com.anilora.geles.security;

public interface JwtTokenProviderInterface {
    String generateToken(String username);
    String getUsernameFromToken(String token);
    boolean validateToken(String token);
}