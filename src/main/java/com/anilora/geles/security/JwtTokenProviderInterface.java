package com.anilora.geles.security;

public interface JwtTokenProviderInterface {
    boolean validateToken(String token);
    String getUsernameFromToken(String token);
}
