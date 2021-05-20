import React from 'react';
import {Paper} from '@material-ui/core';
import {Line} from 'react-chartjs-2';

// Chart library: https://www.chartjs.org/docs/latest/

// create chartData arrays
let chartDataX = [];
let chartDataY = [];

// add data to chartData
const addChartData = (data) => {
    chartDataX = data.Results.series[0].data.map(index => {
     return `${index.periodName} ${index.year}`
    });

    chartDataY = data.Results.series[0].data.map(index => {
        return `${index.value}`
    });
    
    // reverse data so oldest date is listed first
    chartDataX = chartDataX.reverse();
    chartDataY = chartDataY.reverse();
    // console.log(chartDataX, chartDataY)
}

function ChartDisplay(props) {
    // declare variables for props
    const {fetchData, category, subcategories, data} = props;
   
    // call the function and pass in fetchData
    addChartData(fetchData);

    return (
        <div>
            {/* {console.log(fetchData, category, subcategories, data)} */}
            {/* Paper = gives white paper-like background */}
            <Paper aria-label={data} role="chart">
                <Line
                    data={{
                        // x-axis labels
                        labels: chartDataX,
                        datasets:[
                            {
                                // y-value legend
                                label:data.replace(/-/g," "),
                                // y-values
                                data: chartDataY,
                                // inner marker colors
                                backgroundColor: [
                                    "white", "purple","blue"
                                ],
                                // line and outer marker colors
                                borderColor: [
                                    "orange"
                                ],
                                // borderWidth = graph's line thickness
                                borderWidth: 3,
                            },
                            // to create another data set, just add another object here
                        ],
                    }} 
                    
                    // must state graph dimension
                    height={550}
                    options={{
                        maintainAspectRatio:false,
                        layout:{
                            padding:30,
                        },
                        plugins:{
                            title:{
                              display: true,
                              text: `${category.replace(/-/g, " ")} || ${subcategories.replace(/[-]/g, " ").replace(/&/g," || ")}`,
                              font:{
                                  size:20,
                              },
                              padding: {top: 0, left: 0, right: 0, bottom: 10},
                            },                            
                        },
                        scales:{
                            x:{
                                // ticks = x-axis labels
                                ticks:{
                                    callback: function(val, index) {
                                        // show label of every 3rd dataset
                                        return index % 3 === 0 ? this.getLabelForValue(val) : '';
                                    },
                                    font:{
                                        size:14,
                                    },
                                },
                            },
                            y:{
                                ticks:{
                                    font:{
                                        size:14,
                                    },
                                },
                            },
                        },
                     
                    }}
                />
            </Paper>
        </div>
    );
}

export default ChartDisplay;