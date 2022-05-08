import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <NavLink to="/contacts" className={s.btn}>
        Try it now!
      </NavLink>
    </Container>
  );
};

export default HomePage;
