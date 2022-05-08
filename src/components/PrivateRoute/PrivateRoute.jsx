import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/phonebook/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
// const PrivateRoute = ({ children, ...props }) => {
//   const isAuth = useSelector(isAuthSelector);
//   return isAuth ? <Route {...props}>{children}</Route> : <Redirect to='/auth' />;
// };

export default PrivateRoute;
