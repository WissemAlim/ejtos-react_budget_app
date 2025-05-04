import React from 'react';

const Remaining = ({ budget, expenses }) => {
  const total = expenses.reduce((sum, item) => sum + item.cost, 0);
  const remaining = budget - total;
  return (
    <div style={{ backgroundColor: '#d1e7dd' }}>
      Remaining: £{remaining}
    </div>
  );
};

export default Remaining;
