import s from './UserMenu.module.css';
import authSelectors from 'redux/phonebook/auth-selectors';
import { logOut } from 'redux/phonebook/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button/';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={s.userMenu}>
      <p className={s.userName}>Welcome, {name}</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        label="Log out"
      />
    </div>
  );
};

export default UserMenu;
