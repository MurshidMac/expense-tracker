import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if(props.expenses.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }  

  return (
    <ul className="expenses-list">
      {props.expenses.map((elemn, index) => {
        return (
          <ExpenseItem
            key={elemn.id}
            title={elemn.title}
            amount={elemn.amount}
            date={elemn.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
