import React from 'react';

const EditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td><input type="text" name="employee_name" placeholder="Employee Name" required value={editFormData.employee_name} onChange={handleEditFormChange}></input></td>
            <td><input type="text" name="employee_surname" placeholder="Employee Surname" required value={editFormData.employee_surname} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="hotel_id" placeholder="Hotel ID" required value={editFormData.hotel_id} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="hours" placeholder="Hours" required value={editFormData.hours} onChange={handleEditFormChange}></input></td>
            <td><input type="text" name="position" placeholder="Position" required value={editFormData.position} onChange={handleEditFormChange}></input></td>
            <td><input type="number" name="salary" placeholder="Salary" required value={editFormData.salary} onChange={handleEditFormChange}></input></td>
            <td><button type="submit">Submit</button><button type="button" onClick={handleCancelClick}>Cancel</button></td>
        </tr>
    )
}

export default EditRow;
