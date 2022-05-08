const getFilter = state => state.filter;
const getContacts = state => state.contacts.contacts;
const getLoading = state => state.contacts.loading;
const getErrorStatus = state => state.contacts.errorStatus;

// const getVisibleContacts = state => {
//   const normalizedFilter = getFilter(state).toLowerCase();
//   return getContacts(state).filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

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
  getLoading,
  getErrorStatus,
};

export default selectors;
