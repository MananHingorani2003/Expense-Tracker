import './ExpenseAttributes.css';
import React, { useState } from 'react';

const ExpenseAttributes = (props) => {
  const [title, setTitle] = useState(props.user.title);


  const clickHandler = () => {
    setTitle ('Updated');
    console.log (title);

  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.user.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
};

export default ExpenseAttributes;
