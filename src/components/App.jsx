import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

// const arrayToTest = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === normalizedName
      )
    ) {
      alert(`${data.name} is already in the contacts`);
      return;
    }
    this.setState(prev => {
      return {
        ...prev,
        contacts: [...prev.contacts, { id: nanoid(), ...data }],
      };
    });
  };

  onFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onDeleteClick = id => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { submitHandler, onFilterChange, onDeleteClick } = this;
    const { filter, contacts } = this.state;
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
        <ContactList
          contacts={filteredContacts}
          onDeleteClick={onDeleteClick}
        />
      </div>
    );
  }
}

export default App;
