import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
