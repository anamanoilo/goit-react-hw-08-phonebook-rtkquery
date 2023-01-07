import Container from 'components/Container/Container';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const HomePage = () => {
  return (
    <Container>
      <h1 className={s.header}>Phonebook</h1>
      <div className={s.iconWrapper}>
        <svg
          className={s.icon}
          width="320px"
          height="320px"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M44,36h3a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3H44Z" fill="#c1f7fd" />
          <path
            d="M47,49.5H44a1.5,1.5,0,0,1,0-3h3A1.5,1.5,0,0,0,48.5,45V39A1.5,1.5,0,0,0,47,37.5H44a1.5,1.5,0,0,1,0-3h3A4.505,4.505,0,0,1,51.5,39v6A4.505,4.505,0,0,1,47,49.5Z"
            fill="#8d9cf4"
          />
          <path d="M44,12h3a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3H44Z" fill="#eff28d" />
          <path
            d="M47,25.5H44a1.5,1.5,0,0,1,0-3h3A1.5,1.5,0,0,0,48.5,21V15A1.5,1.5,0,0,0,47,13.5H44a1.5,1.5,0,0,1,0-3h3A4.505,4.505,0,0,1,51.5,15v6A4.505,4.505,0,0,1,47,25.5Z"
            fill="#f2bf80"
          />
          <path d="M44,24h3a3,3,0,0,1,3,3v6a3,3,0,0,1-3,3H44Z" fill="#c1f7fd" />
          <path
            d="M47,37.5H44a1.5,1.5,0,0,1,0-3h3A1.5,1.5,0,0,0,48.5,33V27A1.5,1.5,0,0,0,47,25.5H44a1.5,1.5,0,0,1,0-3h3A4.505,4.505,0,0,1,51.5,27v6A4.505,4.505,0,0,1,47,37.5Z"
            fill="#7bcdd1"
          />
          <rect fill="#c1f7fd" height="44" width="32" x="12" y="8" />
          <path
            d="M44,53.5H12A1.5,1.5,0,0,1,10.5,52V8A1.5,1.5,0,0,1,12,6.5H44A1.5,1.5,0,0,1,45.5,8V52A1.5,1.5,0,0,1,44,53.5Zm-30.5-3h29V9.5h-29Z"
            fill="#8d9cf4"
          />
          <motion.g variants={pathVariants} initial="hidden" animate="visible">
            <circle cx="28" cy="20" fill="#eff28d" r="6" />
            <motion.path
              d="M28,27.5A7.5,7.5,0,1,1,35.5,20,7.508,7.508,0,0,1,28,27.5Zm0-12A4.5,4.5,0,1,0,32.5,20,4.505,4.505,0,0,0,28,15.5Z"
              fill="#f2bf80"
            />
            <motion.path
              d="M28,26h0A10,10,0,0,1,38,36v2a0,0,0,0,1,0,0H18a0,0,0,0,1,0,0V36A10,10,0,0,1,28,26Z"
              fill="#eff28d"
            />
            <path
              d="M38,39.5H18A1.5,1.5,0,0,1,16.5,38V36a11.5,11.5,0,0,1,23,0v2A1.5,1.5,0,0,1,38,39.5Zm-18.5-3h17V36a8.5,8.5,0,0,0-17,0Z"
              fill="#f2bf80"
            />
          </motion.g>
          <path
            d="M12,53.5A1.5,1.5,0,0,1,10.5,52V8A1.5,1.5,0,0,1,12,6.5H44a1.5,1.5,0,0,1,0,3H13.5V52A1.5,1.5,0,0,1,12,53.5Z"
            fill="#7bcdd1"
          />
        </svg>
      </div>

      <NavLink to="/contacts" className={s.btn}>
        Try it now!
      </NavLink>
    </Container>
  );
};

export default HomePage;
