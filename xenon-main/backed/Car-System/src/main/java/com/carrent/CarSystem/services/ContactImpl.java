package com.carrent.CarSystem.services;

import com.carrent.CarSystem.doa.ContactDao;
import com.carrent.CarSystem.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactImpl implements ContactService{

    @Autowired
    ContactDao contactDao;
    @Override
    public void add(Contact contact) {
        contactDao.save(contact);
    }
}
