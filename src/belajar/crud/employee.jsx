import React, { useState } from 'react';
import employeeList from './employeeList';

export const Employee = () => {
  const [employees, setEmployees] = useState(employeeList); // Corrected initialization of state

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const idInput = document.getElementById('employeeIdInput').value;
    const nameInput = document.getElementById('employeeNameInput').value;
    const jobInput = document.getElementById('employeeJobInput').value;
    if (idInput.length > 0 && nameInput.length > 0 && jobInput.length > 0) {
      document.getElementById('employeeNameInput').value = '';
      document.getElementById('employeeIdInput').value = '';
      document.getElementById('employeeJobInput').value = '';
      const newEmployee = {
        id: idInput,
        name: nameInput,
        job: jobInput,
      };
      setEmployees([...employees, newEmployee]);
    }
  };

  return (
    <div>
      <p>List of employee</p>
      <ul>
        {employees.length > 0 &&
          employees.map((employee, index) => (
            <div key={index}>
              <li>name: {employee.name}</li>
              <li>id: {employee.id}</li>
              <li>job: {employee.job}</li>
              <br />
            </div>
          ))}
      </ul>
      <form>
        <p>Add New Employee</p>
        <input type="text" placeholder='Name' id="employeeNameInput"/><br />
        <input type="number" placeholder='Id' id="employeeIdInput" /><br />
        <input type="text" placeholder='Job'  id="employeeJobInput"/><br />
        <button onClick={(event) => handleFormSubmit(event)}>Submit</button>
      </form>
    </div>
  );
};

export default Employee;
