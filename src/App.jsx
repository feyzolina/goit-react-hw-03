import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

 const deleteContact = (id) => {
  setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
};

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
