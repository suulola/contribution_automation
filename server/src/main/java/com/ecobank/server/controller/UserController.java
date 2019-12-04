package com.ecobank.server.controller;


import com.ecobank.server.config.AuthenticationBean;
import com.ecobank.server.model.User;
import com.ecobank.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping({"/api/v1"})
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/")
    public String greet() {
        return "Hello World";
    }


    @GetMapping(path = "/auth")
    public AuthenticationBean basicAuth() {
        return new AuthenticationBean("success");
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/users/:id")
    public Optional<User> getSpecificUser(Long id) {
        return userRepository.findById(id);
    }

    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
}
