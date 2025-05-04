import React from 'react';

const ExpenseTotal = ({ expenses }) => {
  const total = expenses.reduce((sum, item) => sum + item.cost, 0);
  return (
    <div style={{ backgroundColor: '#cfe2ff' }}>
      Spent so far: £{total}
    </div>
  );
};

export default ExpenseTotal;
