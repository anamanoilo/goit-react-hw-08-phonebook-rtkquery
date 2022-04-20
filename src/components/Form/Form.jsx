import { Component } from 'react';
import s from './Form.module.css';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = { ...INITIAL_STATE };
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };
  reset = () => this.setState(INITIAL_STATE);

  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };

  onChangeInput = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { onSubmit, onChangeInput } = this;
    const { name, number } = this.state;
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

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
