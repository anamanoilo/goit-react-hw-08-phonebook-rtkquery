import { useSelector, useDispatch } from 'react-redux';
import selectors from 'redux/phonebook/phonebook-selectors';
import { changeFilter } from 'redux/phonebook/phonebook-reducers';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getFilter);

  const onFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };
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

export default Filter;
