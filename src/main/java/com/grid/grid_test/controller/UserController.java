package com.grid.grid_test.controller;

import com.grid.grid_test.dto.LoginRequest;
import com.grid.grid_test.dto.RegisterRequest;
import com.grid.grid_test.dto.AuthResponse;
import com.grid.grid_test.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class UserController {

    private final IUserService userService;

    @GetMapping("/test")
    public String test() {
        return "API is running!";
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(userService.login(request));
    }
}
