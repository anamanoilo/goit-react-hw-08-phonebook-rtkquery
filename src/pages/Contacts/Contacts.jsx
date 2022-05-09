import Container from 'components/Container/Container';
import Form from 'components/Form';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
