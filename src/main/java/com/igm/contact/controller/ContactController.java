package com.igm.contact.controller;

import com.igm.contact.model.Contact;
import com.igm.contact.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RequestMapping("api/contact")
@RestController
public class ContactController {

    private final ContactService contactService;

    @Autowired
    ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public void addContact(@RequestBody Contact contact) {
        this.contactService.createContact(contact);
    }

    @GetMapping
    public List<Contact> getContacts() {
        return this.contactService.getContacts();
    }

    @GetMapping(path = "/{id}")
    public Contact getContact(@PathVariable("id") String id) {
        return this.contactService.getContact(id);
    }

    @PutMapping(path = "/{id}")
    public void updateContact(@PathVariable("id") String id, @RequestBody Contact contact) {
        this.contactService.updateContact(id, contact);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteContact(@PathVariable("id") String id) {
        this.contactService.deleteContact(id);
    }
}
