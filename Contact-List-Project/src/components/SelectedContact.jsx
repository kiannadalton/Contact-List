import React from "react";
import ContactList from "./ContactList";



export default function selectedContactId ({ contact }){
    const [Selected, setSelectedContactId] = useState(ContactList);
    

    return (<p onClick={() => {selectedContactId(contact.id)}} key={contact.id}>
    {contact.name}
  </p>

);
<h1> Selected Contact:</h1>
{ featPupId && (
   <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Name: {contact.name}</li>
      <li>Email: {contact.email}</li>
      <li>Email: {contact.phone}</li>

    </ul>
   </div>  
  )}

}