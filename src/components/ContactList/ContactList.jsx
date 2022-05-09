// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import {
//   getContacts,
//   deleteContact,
//   addContact,
// } from 'redux/phonebook/contacts-operations';
import s from './ContactList.module.css';
import { useFetchContactsQuery } from 'services/phonebookApi';
import selectors from 'redux/phonebook/phonebook-selectors';
import ContactItem from 'components/ContactItem';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import authSelectors from 'redux/phonebook/auth-selectors';

const ContactList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const {
    data: contacts,
    error,
    isLoading,
  } = useFetchContactsQuery(null, {
    skip: !isLoggedIn,
  });

  const filteredContacts = useSelector(state =>
    selectors.getVisibleContacts(state, contacts)
  );

  if (error) {
    toast.error('Something went wrong. Please try again later.');
    return null;
  }
  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader width="50" height="50" />
      </div>
    );
  }
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem name={name} number={number} id={id} key={id} />
      ))}
    </ul>
  );
};

export default ContactList;
