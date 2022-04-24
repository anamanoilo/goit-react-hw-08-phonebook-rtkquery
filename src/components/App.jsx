import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import { STORAGE_KEYS } from 'services/localStorage';

// const arrayToTest = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {
  const [contacts, setContacts] = useLocalStorage(STORAGE_KEYS.CONTACTS, []);
  const [filter, setFilter] = useState('');

  const submitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    if (contacts.some(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${data.name} is already in the contacts`);
      return;
    }
    setContacts([...contacts, { id: nanoid(), ...data }]);
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onDeleteClick = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <Form addContact={submitHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteClick={onDeleteClick} />
    </div>
  );
};

export default App;
