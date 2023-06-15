import { useState, useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  location: string;
  salary: string;
  bestQuotes: string;
  checked: boolean;
}

interface TableProps {
  records: FormData[];
  onUpdateRecords: (updatedRecords: FormData[]) => void;
}

function TableComponent({ records, onUpdateRecords }: TableProps) {
  function handleCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    email: string
  ) {
    const { checked } = event.target;
    const updatedRecords = records.map((record) =>
      record.email === email ? { ...record, checked } : record
    );
    onUpdateRecords(updatedRecords);
  }

  function handleDeleteChecked() {
    const updatedRecords = records.filter((record) => !record.checked);
    onUpdateRecords(updatedRecords);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Best Quotes</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.email}>
              <td>
                <input
                  type="checkbox"
                  checked={record.checked}
                  onChange={(e) => handleCheckboxChange(e, record.email)}
                />
              </td>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.role}</td>
              <td>{record.email}</td>
              <td>{record.location}</td>
              <td>{record.salary}</td>
              <td>{record.bestQuotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
