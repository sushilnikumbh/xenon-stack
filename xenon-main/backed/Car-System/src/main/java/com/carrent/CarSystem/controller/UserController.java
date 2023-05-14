package com.carrent.CarSystem.controller;

import com.carrent.CarSystem.model.User;
import com.carrent.CarSystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserService services;

    @PostMapping(value= {"/user"})
    public String addUser(@RequestBody User user){
        services.add(user);
        return "Success";
    }

    @GetMapping(value = {"/user/{email}"})
    public User getUser(@PathVariable String email) {
        User user = services.getByEmail(email);
        return user;
    }

    @PostMapping(value= {"/userlogin"})
    public User userLogin(@RequestBody User user ) {

        String email = user.getEmail();
        String plainPassword=user.getPassword();

        User mainUser = getUser(email);

        if(mainUser.getPassword().equals(plainPassword)){

            return mainUser;
        }
        return null;
    }


}
