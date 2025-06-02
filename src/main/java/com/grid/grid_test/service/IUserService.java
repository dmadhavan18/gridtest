package com.grid.grid_test.service;

import com.grid.grid_test.dto.LoginRequest;
import com.grid.grid_test.dto.RegisterRequest;
import com.grid.grid_test.dto.AuthResponse;

public interface IUserService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}
