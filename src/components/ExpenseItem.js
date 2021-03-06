import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log('Clicked')
    setTitle('Updated')
    console.log('Original value', props.title)
  }


  return (
    <div className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount} </div>
      </div>
      <button className="expense-item__button" onClick={clickHandler}>Edit Title</button>
    </div>
  );
}

export default ExpenseItem;
