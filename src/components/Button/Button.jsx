import s from './Button.module.css';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
