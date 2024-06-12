import React from "react";
import ContactList from "./ContactList";


export default function SelectedContact (){
    const [selectedContactId, setSelectedContactId] = useState(ContactList);

    useEffect(()=>{
        async function fetchContacts(){
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const result = await response.json();
                setContacts(result);

            } catch (error) {
                console.error(error);
            }
        }
        // need to call fetchContacts to make it work
        fetchContacts();
    },[]);

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