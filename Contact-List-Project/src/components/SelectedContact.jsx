import React from "react";
import ContactList from "./ContactList";



export default function SelectedContact ({ contact }){
    const [selectedContactId, setSelectedContactId] = useState(ContactList);


    return (<p onClick={() => {selectedContactId(ContactList.id)}} key={ContactList.id}>
    {ContactList.name}
  </p>

);
<h1> Selected Contact:</h1>
// { featPupId && (
//    <div>
//     <h2>{featuredPup.name}</h2>
//     <ul>
//       <li>Name: {contact.name}</li>
//       <li>Email: {contact.email}</li>
//       <li>Email: {contact.phone}</li>

//     </ul>
//    </div>  
//   )}

}