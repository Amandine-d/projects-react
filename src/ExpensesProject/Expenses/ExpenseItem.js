import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <div>{props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </>
  )
}

export default ExpenseItem;