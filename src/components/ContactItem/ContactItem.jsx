import { useEffect } from 'react';
import { toast } from 'react-toastify';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/phonebookApi';
import Button from 'components/Button';

const ContactItem = ({ id, name, number }) => {
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
      <div>
        <span className={s.contactName}>{name}:</span>{' '}
        <a className={s.phone} href={`tel:+${number}`}>
          {number}
        </a>
      </div>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
        label="Delete"
      />
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
