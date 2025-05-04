import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onIncrease, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Department</th>
        <th>Allocated Budget</th>
        <th>Increase by 10</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.department}
          department={item.department}
          cost={item.cost}
          onIncrease={() => onIncrease(item.department)}
          onDelete={() => onDelete(item.department)}
        />
      ))}
    </tbody>
  </table>
);

export default ExpenseList;

