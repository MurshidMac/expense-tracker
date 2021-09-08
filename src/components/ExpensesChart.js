import React from 'react'
import Chart from './Chart'

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { chartlabel: 'Jan', data: 0 },
        { chartlabel: 'Feb', data: 0 },
        { chartlabel: 'Mar', data: 0 },
        { chartlabel: 'Apr', data: 0 },
        { chartlabel: 'May', data: 0 },
        { chartlabel: 'Jun', data: 0 },
        { chartlabel: 'Jul', data: 0 },
        { chartlabel: 'Aug', data: 0 },
        { chartlabel: 'Sep', data: 0 },
        { chartlabel: 'Oct', data: 0 },
        { chartlabel: 'Nov', data: 0 },
        { chartlabel: 'Dec', data: 0 },
    ]

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].data += expense.amount
    }

    return (
        <Chart chartsDataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart
