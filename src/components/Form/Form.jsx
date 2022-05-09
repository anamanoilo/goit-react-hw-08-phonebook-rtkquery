import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import s from './Form.module.css';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'services/phonebookApi';
import authSelectors from 'redux/phonebook/auth-selectors';
import { useSelector } from 'react-redux';
import Button from 'components/Button';

const Form = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery({
    skip: !isLoggedIn,
  });
  const [addContact, { isLoading, isSuccess, isError }] =
    useAddContactMutation();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = async e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    if (contacts?.some(({ name }) => name.toLowerCase() === normalizedName)) {
      toast.error(`${name} is already in the contacts`);
      return;
    }
    addContact({ name, number });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        `${name} has been successfully added to your contact list.`
      );
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(`Something went wrong. Please try again later.`);
    }
  }, [isError]);

  const onChangeInput = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={name}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={number}
        />
      </label>

      <Button
        type="submit"
        disabled={isLoading}
        onClick={onSubmit}
        label="Add contact"
      />
    </form>
  );
};

export default Form;
