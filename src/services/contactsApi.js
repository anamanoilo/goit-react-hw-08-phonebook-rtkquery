import axios from 'axios';

async function fetchContacts() {
  const response = await axios({
    method: 'get',
    url: '/contacts',
  });

  return response.data;
}

async function addContact(contactToAdd) {
  const response = await axios({
    method: 'post',
    url: '/contacts',
    data: contactToAdd,
  });

  return response.data;
}

async function deleteContact(id) {
  const response = await axios({
    method: 'delete',
    url: `/contacts/${id}`,
  });

  return response.data;
}
const contactsApi = { fetchContacts, addContact, deleteContact };

export default contactsApi;
