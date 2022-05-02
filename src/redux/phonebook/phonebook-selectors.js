const getFilter = state => state.phonebook.filter;
const getContacts = state => state.phonebook.contacts;

const selectors = { getFilter, getContacts };
export default selectors;
