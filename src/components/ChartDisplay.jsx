import React from 'react';
import {Paper, makeStyles} from '@material-ui/core';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  Legend,
  Title
} from '@devexpress/dx-react-chart-material-ui';


// create chartData array
let chartData = [];

// add data to chartData
const addChartData = (data) => {
    console.log(data.Results.series[0].data)
    chartData = data.Results.series[0].data.map(index => {
     return {argument: `${index.periodName} ${index.year}`, value: `${index.value}`}
    })
    // reverse data so oldest date is listed first
    chartData = chartData.reverse();
    console.log(chartData)
}

function ChartDisplay(props) {
    // declare variables for props
    const {fetchData, category, subcategories, data} = props;
   
    // call the function and pass in fetchData
    addChartData(fetchData);

    const customLabelX = props => {
        // props = individual text label shown as 
        // {text:"April 2021", x: x-value, y: y-value, etc}
        const {text} = props;
        // console.log("x-axis ", text);

        // list each x-value that indicates every quarter
        const monthsArray = ["January", "April", "July", "October"]

        // split text via space and call first index in [April, 2021]
        if (monthsArray.includes(text.split(" ")[0])){
            // include spread operator on props to pass in
            // individual key and value not just the overall object
            return <ArgumentAxis.Label {...props} />
        }

        // if the month isn't in the array, return null 
        // so the x-value doesn't display on chart
        return null;   
    }

    // show tick mark on every 3 data points
    let tickCounterX = 0;
    const customTickX = props => {
        // console.log("tickX ", props);
        tickCounterX += 1;
        if (!(tickCounterX % 3)){
            return <ArgumentAxis.Tick {...props} />
        }
        return null;
    }

    const customLabelY = props => {
        // console.log("y-axis ", props);
        return null;
    }

    let tickCounterY = 0;
    const customTickY = props => {
        console.log("tickY ", props);
        // tickCounterY += 1;
        // if (!(tickCounterY % 100)){
        //     return <ValueAxis.Tick {...props} />
        // }
        return null;
    }

    return (
        <div>
            {/* {console.log(fetchData, category, subcategories, data)} */}
            <Paper>
                <Chart data={chartData}>
                    {/* x-axis */}
                    <ArgumentAxis tickSize={10} labelComponent={customLabelX} tickComponent={customTickX} />
                    {/* y-axis */}
                    <ValueAxis tickSize={10} labelComponent={customLabelY} tickComponent={customTickY} />

                    {/* get arguments and values from data array of objects */}
                    
                    
                    <LineSeries name={data.replace(/-/g," ")} valueField="value" argumentField="argument" />
                    
                    <Legend position="bottom" />
                    <Title text={category.replace(/-/g," ")} />
                </Chart>
            </Paper>
        </div>
    );
}

export default ChartDisplay;