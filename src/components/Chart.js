import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = (props) => {
    const dataPointsValues =  props.chartsDataPoints.map(dataPoint => dataPoint.data);
    const totalMaxium = Math.random(...dataPointsValues);
    return (
        <div className="chart">
            { props.chartsDataPoints.map((chartDataPoint) => { 
                return <ChartBar 
                key={chartDataPoint.chartlabel}
                value={chartDataPoint.data}  
                maxValue={totalMaxium} 
                chartLabel={chartDataPoint.chartlabel}
                />
                 }) }
        </div>
    )
}

export default Chart
