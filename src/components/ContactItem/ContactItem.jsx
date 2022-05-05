import { useEffect } from 'react';
import { toast } from 'react-toastify';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/phonebookApi';
import Loader from 'components/Loader/Loader';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        `The contact has been successfully deleted from your contact list.`
      );
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(`Something went wrong. Please try again.`);
    }
  }, [isError]);

  return (
    <li key={id} className={s.item}>
      <p>
        <span className={s.contactName}>{name}:</span> {phone}
      </p>
      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        {isLoading ? <Loader width="20" height="20" /> : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
