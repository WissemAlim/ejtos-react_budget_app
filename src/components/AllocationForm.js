import React, { useState } from 'react';

const AllocationForm = ({ onSubmit }) => {
  const [department, setDepartment] = useState('');
  const [type, setType] = useState('Add');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!department || !amount) return;
    onSubmit(department, amount, type);
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={department} onChange={(e) => setDepartment(e.target.value)}>
        <option value="">Choose...</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
        <option value="Sales">Sales</option>
        <option value="Human Resource">Human Resource</option>
        <option value="IT">IT</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Reduce">Reduce</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};
export default AllocationForm;
