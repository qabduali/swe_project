import React, { useState, Fragment } from 'react';
import EditRow from '../components/EditRow';
import ReadOnlyRow from '../components/ReadOnlyRow';
import data from '../mock-data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Table} from 'react-bootstrap';

function Manager() {
    const [contacts, setContacts] = useState(data);
    const [editContactId, setEditContactId] = useState(null);

    const [addFormData, setAddFormData] = useState({
       /* "employee_id": "",*/
        "employee_name": "",
        "employee_surname": "",
        "hotel_id": "",
        "hours": "",
        "position": "",
        "salary": ""
    });

    const [editFormData, setEditFormData] = useState({
        "employee_name": "",
        "employee_surname": "",
        "hotel_id": "",
        "hours": "",
        "position": "",
        "salary": ""
    })

    const handleAddFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        console.log(fieldValue);
        console.log(newFormData);
        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        
        const newContact = {
            employee_name: addFormData.employee_name,
            employee_surname: addFormData.employee_surname,
            hotel_id: addFormData.hotel_id,
            hours: addFormData.hours,
            position: addFormData.position,
            salary: addFormData.salary
        }

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            employee_name: editFormData.employee_name,
            employee_surname: editFormData.employee_surname,
            hotel_id: editFormData.hotel_id,
            hours: editFormData.hours,
            position: editFormData.position,
            salary: editFormData.salary
        }

        const newContacts = [...contacts];

        const id = contacts.findIndex((contact) => contact.employee_id === editContactId);

        newContacts[id] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    }

    const handleEditClick = (event, contact) =>{
        event.preventDefault();
        setEditContactId(contact.employee_id);

        const formValues = {
            employee_name: contact.employee_name,
            employee_surname: contact.employee_surname,
            hotel_id: contact.hotel_id,
            hours: contact.hours,
            position: contact.position,
            salary: contact.salary
        };

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const id = contacts.findIndex((contact) => contact.employee_id === contactId );

        newContacts.splice( id, 1 );

        setContacts(newContacts);

    }

    return (
        <div>
            <div className="container">
            <form onSubmit={handleEditFormSubmit}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hotel ID</th>
                        <th>Hours</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Fragment>
                            {editContactId === contact.employee_id ? 
                            ( <EditRow 
                                editFormData={editFormData} 
                                handleEditFormChange = {handleEditFormChange}
                                handleCancelClick = {handleCancelClick}
                                /> ) :
                            ( <ReadOnlyRow 
                                contact = {contact} 
                                handleEditClick = {handleEditClick}
                                handleDeleteClick = {handleDeleteClick}
                                /> )}
                        </Fragment>
                    ))}
                </tbody>
            </Table>
            </form>
            <h3>Add an employee</h3>
            <form onSubmit={handleAddFormSubmit}>
                <input type="text" name="employee_name" placeholder="Employee Name" required onChange={handleAddFormChange}></input>
                <input type="text" name="employee_surname" placeholder="Employee Surname" required onChange={handleAddFormChange}></input>
                <input type="number" name="hotel_id" placeholder="Hotel ID" required onChange={handleAddFormChange}></input>
                <input type="number" name="hours" placeholder="Hours" required onChange={handleAddFormChange}></input>
                <input type="text" name="position" placeholder="Position" required onChange={handleAddFormChange}></input>
                <input type="number" name="salary" placeholder="Salary" required onChange={handleAddFormChange}></input>
                <button type="submit"> Add </button>
            </form>
        </div>
        </div>
    )
}

export default Manager
