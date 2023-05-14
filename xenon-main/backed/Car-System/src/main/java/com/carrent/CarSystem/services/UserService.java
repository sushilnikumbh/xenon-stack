package com.carrent.CarSystem.services;

import com.carrent.CarSystem.model.User;

public interface UserService {

    void add(User user);

    User getByEmail(String email);
}
