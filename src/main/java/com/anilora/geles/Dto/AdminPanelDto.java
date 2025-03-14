package com.anilora.geles.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.anilora.geles.models.User;
import com.anilora.geles.models.Product;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminPanelDto {
    private List<User> users;
    private List<Product> products;
    private String adminName; // Optional: to display the admin's name if necessary
}
