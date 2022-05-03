import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Form.module.css';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'services/phonebookApi';
import Loader from 'components/Loader/Loader';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const reset = () => {
    setName('');
    setPhone('');
  };

  const onSubmit = async e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    if (contacts?.some(({ name }) => name.toLowerCase() === normalizedName)) {
      toast.error(`${name} is already in the contacts`);
      return;
    }
    try {
      await addContact({ name, phone });
      toast.success(
        `${name} has been successfully added to your contact list.`
      );
      reset();
    } catch (error) {
      toast.error(`Something went wrong. Please try again later.`);
    }
  };

  const onChangeInput = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={phone}
        />
      </label>

      <button type="submit" className={s.addBtn}>
        {isLoading ? <Loader width="20" height="20" /> : 'Add contact'}
      </button>
    </form>
  );
};

export default Form;
