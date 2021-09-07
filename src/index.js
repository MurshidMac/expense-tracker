import React, { useState } from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// import { data } from "./books";
// import SpecificBook from "./Book";
import NewExpense from "./components/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter";
import ExpensesList from "./components/ExpensesList";


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const [expenses, setExpenses] = useState(DUMMY_DATA) 

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  const addExpenseHandler = (newExpenseObj) => {
      console.log('Ín App.js ', newExpenseObj)
      //allExpense = [...expenses];
      setExpenses((prevExpenses) => { return [newExpenseObj, ...prevExpenses]})
  }

  return (
    <React.Fragment>
      <NewExpense onNewAddExpense={addExpenseHandler} />
      <div>
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
      />
        <ExpensesList expenses={filteredExpenses}/>
      </div>
    </React.Fragment>
  );
}

ReactDom.render(<Expenses />, document.getElementById("root"));
