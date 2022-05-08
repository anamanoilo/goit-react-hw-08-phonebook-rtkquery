import s from './Button.module.css';
import Loader from 'components/Loader';

const Button = ({
  type,
  label,
  onClick,
  className = 'btn',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={s[className]}
      disabled={disabled}
    >
      {disabled ? <Loader width="20" height="20" /> : label}
    </button>
  );
};

export default Button;
