import React, { useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        {props.items.map(
          expense =>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
        )}
      </Card>
    </div>
  )
}

export default Expenses;