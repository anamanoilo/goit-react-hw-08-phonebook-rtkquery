import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from 'components/Loader';
import NavBar from 'components/NavBar';
import s from './App.module.css';

const LazyHomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */)
);
const LazyRegister = lazy(() =>
  import('pages/Register/Register' /* webpackChunkName: "Register" */)
);
const LazyLogin = lazy(() =>
  import('pages/Login/Login' /* webpackChunkName: "Login" */)
);
const LazyContacts = lazy(() =>
  import('pages/Contacts/Contacts' /* webpackChunkName: "Contacts" */)
);

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <div className={s.loader}>
            <Loader width="50" height="50" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <LazyRegister />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LazyLogin />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <LazyContacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<LazyHomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
