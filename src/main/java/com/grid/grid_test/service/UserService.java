package com.grid.grid_test.service;

import com.grid.grid_test.dto.LoginRequest;
import com.grid.grid_test.dto.RegisterRequest;
import com.grid.grid_test.dto.AuthResponse;
import com.grid.grid_test.entity.User;
import com.grid.grid_test.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements com.grid.grid_test.service.IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return new AuthResponse("❌ Email already registered");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword())); // hash password

        userRepository.save(user);

        return new AuthResponse("✅ User registered successfully");
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isEmpty()) {
            return new AuthResponse("❌ Email not found");
        }

        User user = userOptional.get();

        boolean passwordMatches = passwordEncoder.matches(request.getPassword(), user.getPassword());
        if (!passwordMatches) {
            return new AuthResponse("❌ Invalid password");
        }

        return new AuthResponse("✅ Login successful");
    }
}

