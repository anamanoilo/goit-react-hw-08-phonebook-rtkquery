import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from 'services/phonebookApi';
import authSlice from 'redux/phonebook/auth-slice';
import Button from 'components/Button';
import { toast } from 'react-toastify';
import s from './AuthForm.module.css';

const AuthForm = ({ type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    loginUser,
    { data: loginData, error: loginError, isSuccess: loginSuccess },
  ] = useLoginUserMutation();
  const [
    registerUser,
    { data: registerData, error: registerError, isSuccess: registerSuccess },
  ] = useRegisterUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginData?.user) {
      dispatch(authSlice.actions.saveLoginData(loginData));
    }
  }, [loginData, dispatch]);

  useEffect(() => {
    if (registerData?.user) {
      dispatch(authSlice.actions.saveRegisterData(registerData));
    }
  }, [registerData, dispatch]);

  useEffect(() => {
    if (registerError?.status === 500) {
      toast.error('Something went wrong. Please try again.');
    }
    if (loginError || registerError?.status === 400) {
      toast.error(
        'Something went wrong. Please check your data and try again.'
      );
    }
  }, [loginError, registerError]);

  useEffect(() => {
    if (loginSuccess || registerSuccess) {
      reset();
    }
  }, [loginSuccess, registerSuccess]);

  const onChangeInput = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onAuthSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'register') {
      registerUser({ name, email, password });
    }
    if (type === 'login') {
      loginUser({ email, password });
    }
  };

  return (
    <form className={s.form} onSubmit={e => onAuthSubmit(e, type)}>
      {type === 'register' ? (
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            required
            autoComplete="off"
            onChange={onChangeInput}
            value={name}
          />
        </label>
      ) : null}

      <label className={s.label}>
        Email
        <input
          className={s.input}
          type="email"
          name="email"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={email}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={password}
        />
      </label>
      <Button
        type="submit"
        label={type === 'register' ? 'Sign Up' : 'Log In'}
        onClick={e => onAuthSubmit(e, type)}
      />
    </form>
  );
};

export default AuthForm;
