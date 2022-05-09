import { useEffect } from 'react';
import s from './UserMenu.module.css';
import authSelectors from 'redux/phonebook/auth-selectors';
import {
  useLogoutUserMutation,
  useRefreshUserQuery,
} from 'services/phonebookApi';
import AuthSlice from 'redux/phonebook/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button/';
import { toast } from 'react-toastify';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { data: refreshData } = useRefreshUserQuery(null, {
    skip: !isLoggedIn,
  });
  const [
    logOut,
    { isSuccess: isLogoutSuccess, isError: isLogoutError, isLoading },
  ] = useLogoutUserMutation();

  useEffect(() => {
    if (refreshData) dispatch(AuthSlice.actions.refreshUserData(refreshData));
  }, [dispatch, refreshData]);

  useEffect(() => {
    if (isLogoutSuccess) {
      dispatch(AuthSlice.actions.resetUserData());
    }
  }, [isLogoutSuccess, dispatch]);

  useEffect(() => {
    if (isLogoutError) {
      toast.error(
        'Something wrong wrong. Please try again or reload the page.'
      );
    }
  }, [isLogoutError]);

  return (
    <div className={s.userMenu}>
      <p className={s.userName}>Welcome, {name}</p>
      <Button
        type="button"
        onClick={() => logOut()}
        label="Log out"
        disabled={isLoading}
      />
    </div>
  );
};

export default UserMenu;
