import React from 'react';

const Budget = ({ budget, setBudget }) => (
  <div>
    <label>Budget: £</label>
    <input
      type="number"
      value={budget}
      onChange={(e) => setBudget(Number(e.target.value))}
    />
  </div>
);

export default Budget;
