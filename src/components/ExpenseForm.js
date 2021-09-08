import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
// Seperate state changes
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')

// Single state change
// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredDate: '',
//     enteredAmount: ''
// })

  const titleChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value)
    setEnteredTitle(event.target.value)
    // BAD approach since it might have state conflicts due to scheduling
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value 
    // })
    // GOOD approach depends on scheduling
    // setUserInput((prevState) => {
    //     return {
    //             ...prevState,
    //             enteredTitle: event.target.value 
    //         }
    // })
  };

  const dateChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value)
    setEnteredDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value 
    // })
    // setUserInput((prevState) => {
    //     return {
    //             ...prevState,
    //             enteredDate: event.target.value 
    //         }
    // })
  };

  const amountChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value)
    setEnteredAmount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value 
    // })
    // setUserInput((prevState) => {
    //     return {
    //             ...prevState,
    //             enteredAmount: event.target.value 
    //         }
    // })
  };

  const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseObject = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log('Expense Object', expenseObject)
        // Pass the value to parent from child
        props.onSaveExpenseData(expenseObject)
        // Clear the values
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler}  min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
