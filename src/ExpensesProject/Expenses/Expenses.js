import React from "react";

const Expenses = (props) => {
  return (
    <div>
      Hello
      <h1>{props.items[0].title}</h1>
    </div>
  )
}

export default Expenses;