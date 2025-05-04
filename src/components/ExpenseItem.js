import React from 'react';

const ExpenseItem = ({ department, cost, onIncrease, onDelete }) => (
  <tr>
    <td>{department}</td>
    <td>£{cost}</td>
    <td><button onClick={onIncrease}>+</button></td>
    <td><button onClick={onDelete}>✖</button></td>
  </tr>
);

export default ExpenseItem;
