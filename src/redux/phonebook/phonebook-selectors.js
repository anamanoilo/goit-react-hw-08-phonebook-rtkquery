const getFilter = state => state.filter;
const getContacts = state => state.contacts.contacts;

const getVisibleContacts = (state, data) => {
  const normalizedFilter = getFilter(state).toLowerCase();
  return data?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const selectors = {
  getFilter,
  getContacts,
  getVisibleContacts,
};

export default selectors;
