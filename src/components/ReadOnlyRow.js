import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            
            <td>{contact.employee_name}</td>
            <td>{contact.employee_surname}</td>
            <td>{contact.hotel_id}</td>
            <td>{contact.hours}</td>
            <td>{contact.position}</td>
            <td>{contact.salary}</td>
            <td> 
                <button type="button" variant="primary" onClick = {(event)=>handleEditClick(event, contact)}>
                      Edit  
                </button>{'   '}
                <button type="button" variant="danger" onClick = {()=>handleDeleteClick(contact.employee_id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;
