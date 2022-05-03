const getFilter = state => state.filter;

const getVisibleContacts = (state, data) => {
  const normalizedFilter = getFilter(state).toLowerCase();
  return data.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const selectors = { getFilter, getVisibleContacts };

export default selectors;
