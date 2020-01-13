package com.igm.contact.service;

import com.igm.contact.model.Contact;
import com.igm.contact.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact getContact(String id) {
        return this.contactRepository.getById(id);
    }

    @Override
    public List<Contact> getContacts() {
        return this.contactRepository.getContacts();
    }

    @Override
    public void createContact(Contact contact) {
        this.contactRepository.insert(contact);
    }

    @Override
    public void updateContact(String id, Contact contact) {
        this.contactRepository.update(id, contact);
    }

    @Override
    public void deleteContact(String id) {
        this.contactRepository.delete(id);
    }
}
