import React, {useState} from 'react';
import "./App.css";
import { memberExpression } from '@babel/types';

const Form = props => {
const [newMember, setNewMember] = useState({name:"", email:"", role:"" });

const handleChange = event => {
   setNewMember({...memberExpression, [event.target.name]: event.target.value })
};
    const handleSubmit = event => {
        event.preventDefault();
        console.log(newMember.name)
        console.log(newMember.email)
        console.log(newMember.role)
    }

return (
    <div>
        <h4>Add New Member</h4>
     <form onSubmit={event => handleSubmit (event)}>
     <label>
<input type ="text"
name="name"
value={newMember.name}
onChange ={event => handleChange(event)}
/>


     </label>

     <label>
<input type ="text"
name="email"
value={newMember.email}
onChange ={event => handleChange(event)}
/>


     </label>

     <label>
<input type ="text"
name="role"
value={newMember.role}
onChange ={event => handleChange(event)}
/>


     </label>
     <button>Submit</button>
    </form>
    </div>)
    }

export default Form;