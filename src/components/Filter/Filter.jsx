import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange, filter }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        onChange={onFilterChange}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
