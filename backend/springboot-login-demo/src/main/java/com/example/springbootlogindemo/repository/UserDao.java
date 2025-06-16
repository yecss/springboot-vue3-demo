package com.example.springbootlogindemo.repository;

import com.example.springbootlogindemo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Ye
 * @date 2025-06-16
 */
public interface UserDao extends JpaRepository<User, Long> {
    User findByUname(String uname);
    User findByUnameAndPassword(String uname, String password);
}
