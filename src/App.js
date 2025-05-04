import React, { useState } from 'react';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import AllocationForm from './components/AllocationForm';

const App = () => {
  const [budget, setBudget] = useState(1980);
  const [expenses, setExpenses] = useState([
    { department: 'Marketing', cost: 50 },
    { department: 'Finance', cost: 300 },
    { department: 'Sales', cost: 70 },
    { department: 'Human Resource', cost: 40 },
    { department: 'IT', cost: 500 }
  ]);

  const handleIncrease = (department) => {
    setExpenses(prev =>
      prev.map(item =>
        item.department === department
          ? { ...item, cost: item.cost + 10 }
          : item
      )
    );
  };

  const handleDelete = (department) => {
    setExpenses(prev => prev.filter(item => item.department !== department));
  };

  const handleFormSubmit = ({ department, action, amount }) => {
    setExpenses(prev => {
      const existing = prev.find(item => item.department === department);
      if (existing) {
        return prev.map(item =>
          item.department === department
            ? {
                ...item,
                cost: action === 'Add'
                  ? item.cost + amount
                  : Math.max(0, item.cost - amount)
              }
            : item
        );
      } else {
        return [...prev, { department, cost: amount }];
      }
    });
  };
<div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
  <Budget budget={budget} setBudget={setBudget} />
  <Remaining budget={budget} expenses={expenses} />
  <ExpenseTotal expenses={expenses} />
</div>
  return (
    <div className="container">
      <h1>Company's Budget Allocation</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Budget budget={budget} setBudget={setBudget} />
        <Remaining budget={budget} expenses={expenses} />
        <ExpenseTotal expenses={expenses} />
      </div>
      <h2>Allocation</h2>
      <table border="1">
  <thead>
    <tr>
      <th>Department</th>
      <th>Allocated Budget</th>
      <th>Increase</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Test Dept</td>
      <td>£100</td>
      <td><button>+</button></td>
      <td><button>X</button></td>
    </tr>
  </tbody>
</table>

      <ExpenseList
        expenses={expenses}
        onIncrease={handleIncrease}
        onDelete={handleDelete}
      />
      <h2>Change allocation</h2>
      <AllocationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
