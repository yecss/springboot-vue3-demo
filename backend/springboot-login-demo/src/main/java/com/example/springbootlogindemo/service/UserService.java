package com.example.springbootlogindemo.service;

import com.example.springbootlogindemo.domain.User;

/**
 * @author Ye
 * @date 2025-06-16
 */
public interface UserService {
    User loginService(String uname, String password);
    User registService(User user);
}
