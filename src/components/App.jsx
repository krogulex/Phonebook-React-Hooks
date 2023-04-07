import { Component, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  /*   useEffect(() => {
    
    const dataLocalStorage = JSON.parse(localStorage.getItem('contacts'));

    if (dataLocalStorage) {
      setContacts(dataLocalStorage)
    }
  },[]) */

  useEffect(() => {
    console.log(contacts);
    const contactsStringified = JSON.stringify(contacts);
    console.log(contactsStringified);
    localStorage.setItem('contacts', contactsStringified);
  }, [contacts]);

  const onSubmit = ({ newContact }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = event => {
    const filterInput = event.target.value;
    setFilter({ filterInput });
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <div className="content-box">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
