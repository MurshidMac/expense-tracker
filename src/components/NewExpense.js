import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseObj = {
            ...enteredExpenseData,
            id: `e${Math.ceil(Math.random()*10000)}`
        }
        console.log('Parent Data', expenseObj)
        props.onNewAddExpense(expenseObj);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;
