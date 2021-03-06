import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  // const clickHandler = (props) => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button className='expense-item__btn' onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  )
}

export default ExpenseItem;