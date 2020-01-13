package com.igm.contact.repository;

import com.igm.contact.model.Contact;

import java.util.List;

public interface ContactRepository {

    Contact getById(String id);

    List<Contact> getContacts();

    void insert(Contact contact);

    void update(String id, Contact contact);

    void delete(String id);
}
