function sortContacts(arr, el = true) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.sort((a, b) => {
    if (el) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
}

const contacts = [
  { name: 'Anton', phoneNumber: '999-99-99' },
  { name: 'Bob', phoneNumber: '777-99-99' },
  { name: 'Daddy', phoneNumber: '222-99-55' },
  { name: 'Endrew', phoneNumber: '223-99-99' },
  { name: 'Clint', phoneNumber: '555-99-99' },
  { name: 'Frank', phoneNumber: '333-99-99' },
];

console.log(sortContacts(contacts, true));
