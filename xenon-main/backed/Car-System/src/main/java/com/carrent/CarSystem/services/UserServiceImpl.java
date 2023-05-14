package com.carrent.CarSystem.services;

import com.carrent.CarSystem.doa.UserDao;
import com.carrent.CarSystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{


    @Autowired
    UserDao dao ;
    @Override
    public void add(User user) {
        dao.save(user);
    }

    @Override
    public User getByEmail(String email) {
        return dao.findByEmail(email);
    }
}
