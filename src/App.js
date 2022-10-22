import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.56,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 229.34,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e3",
    title: "Saul Goodman",
    amount: 900.87,
    date: new Date(2020, 9, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState (DUMMY_EXPENSES);
  

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses (prevExpenses => {
      return [enteredExpenseData, ...prevExpenses];
    });

  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense addExpenseData={addExpenseHandler}/>
      <Expenses user={expenses}/>

    </div>
  );
}

export default App;
