import { useSelector, useDispatch } from 'react-redux';
import selectors from 'redux/phonebook/phonebook-selectors';
import changeFilter from 'redux/phonebook/phonebook-actions';
import { addContact, deleteContact } from 'redux/phonebook/phonebook-reducers';
// import Container from './Container';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

const { getFilter, getContacts } = selectors;

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const submitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    if (contacts.some(({ name }) => name.toLowerCase() === normalizedName)) {
      alert(`${data.name} is already in the contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  const onFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
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
