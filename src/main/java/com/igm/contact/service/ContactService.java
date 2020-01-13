package com.igm.contact.service;

import com.igm.contact.model.Contact;

import java.util.List;

public interface ContactService {

    Contact getContact(String id);

    List<Contact> getContacts();

    void createContact(Contact contact);

    void updateContact(String id, Contact contact);

    void deleteContact(String id);
}
