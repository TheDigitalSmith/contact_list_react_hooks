import React,{useState} from 'react';

const ContactCard = (props) =>{
    const [showAge, setshowAge] = useState(false);
    return (
     <div className="contact-card">
       <img src={props.avatar} alt="profile"></img>
       <div className="user-details">
         <p>Name: {props.name}</p>
         <p>Email: {props.email}</p>
    {showAge && <p>{props.age} </p>}
         <button onClick={() => setshowAge(!showAge)}>Toggle Age</button>
       </div>
     </div>
   );
 }

 export default ContactCard