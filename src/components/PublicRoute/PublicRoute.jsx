import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/phonebook/auth-selectors';
const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>{isLoggedIn && restricted ? <Navigate to="/contacts" /> : children}</>
  );
};

export default PublicRoute;
