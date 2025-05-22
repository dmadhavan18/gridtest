package com.grid.grid_test.controller;

import com.grid.grid_test.dto.LoginRequest;
import com.grid.grid_test.dto.RegisterRequest;
import com.grid.grid_test.entity.User;

import com.grid.grid_test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public User registerUser(@RequestBody RegisterRequest request) {
        return userService.registerUser(request);
    }
    @PostMapping("/login")
    public User loginUser(@RequestBody LoginRequest request) {
        return userService.loginUser(request);
    }
}