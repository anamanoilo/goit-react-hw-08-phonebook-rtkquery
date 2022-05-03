async function fetchContacts() {
  const response = await fetch(
    'https://626febe1f7d739495bdeffa6.mockapi.io/contacts'
  );
  return response.json();
}

async function addContact(contactToAdd) {
  const response = await fetch(
    'https://626febe1f7d739495bdeffa6.mockapi.io/contacts',
    {
      method: 'POST',
      body: JSON.stringify(contactToAdd),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }
  );
  return response.json();
}

async function deleteContact(id) {
  const response = await fetch(
    `https://626febe1f7d739495bdeffa6.mockapi.io/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );
  return response.json();
}
const contactsApi = { fetchContacts, addContact, deleteContact };

export default contactsApi;
