package com.grid.grid_test.service;

import com.grid.grid_test.dto.LoginRequest;
import com.grid.grid_test.dto.RegisterRequest;
import com.grid.grid_test.entity.User;
import com.grid.grid_test.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User registerUser(RegisterRequest request) {
        // Optional: Add validation, password hashing
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // Note: Hash in production!
        return userRepository.save(user);
    }
    public User loginUser(LoginRequest request) {
        // Find user by email
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found with this email");
        }
        User user = userOptional.get();
        // Check password (Plaintext comparison for now — we'll hash later)
        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        return user;
    }




}
