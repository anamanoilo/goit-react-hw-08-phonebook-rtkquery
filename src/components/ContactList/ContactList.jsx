import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { useFetchContactsQuery } from 'services/phonebookApi';
import selectors from 'redux/phonebook/phonebook-selectors';
import ContactItem from 'components/ContactItem';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const filteredContacts = useSelector(state =>
    selectors.getVisibleContacts(state, contacts)
  );

  if (!!error) {
    return error.status === 404 ? (
      <p className={s.error}>The contact list is empty.</p>
    ) : (
      toast.error('Something went wrong. Please try again later.')
    );
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
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem name={name} phone={phone} id={id} key={id} />
      ))}
    </ul>
  );
};

export default ContactList;
