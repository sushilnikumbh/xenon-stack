package com.carrent.CarSystem.doa;

import com.carrent.CarSystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

    public User findByEmail(@Param(value = "email") String email);
}
