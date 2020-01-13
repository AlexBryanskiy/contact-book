package com.igm.contact.repository;

import com.igm.contact.model.Contact;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ContactRepositoryImpl implements ContactRepository {

    private Map<String, Contact> collection;

    public ContactRepositoryImpl() {
        this.collection = new ConcurrentHashMap<>();
    }

    @Override
    public Contact getById(String id) {
        return this.collection.get(id);
    }

    @Override
    public List<Contact> getContacts() {
        return new ArrayList<>(this.collection.values());
    }

    @Override
    public void insert(Contact contact) {
        this.collection.put(contact.getId(), contact);
    }

    @Override
    public void update(String id, Contact contact) {

    }

    @Override
    public void delete(String id) {

    }
}
