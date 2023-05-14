package com.carrent.CarSystem.controller;

import com.carrent.CarSystem.model.Contact;
import com.carrent.CarSystem.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ContactController {

    @Autowired
    ContactService contactService;

    @PostMapping(value = "/contact/add")
    public String addContact(@RequestBody Contact contact){
        contactService.add(contact);
        System.out.println(contact.getEmail());
        System.out.println(contact.getName());
        System.out.println(contact.getEmail());
        return "Success";
    }
}
