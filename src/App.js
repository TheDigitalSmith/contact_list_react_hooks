import React, { useState, useEffect } from "react";
import "./style.css";

import ContactCard from "./components/ContactCards";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        ></ContactCard>
      ))}
    </>
  );
};

export default App;
