import React from 'react';
import {DatesData} from "../data";

const chartConfigs = {
    type : "column2d",
    width : "100%",
    height : "400",
    dataFormat : "json",
    dataSource : {
        chart : {
            caption : "Months With Most Oil Reserves [2017-18]",
            subCaption: "In MMbbl = One Million barrels",
            xAxisName: "Month",
            yAxisName: "Reserves (MMbbl)", 
            numberSuffix:"$",
            labelDisplay : "Rotate",
            theme : "fusion"
        },
        data: DatesData
    }
}

const TwoDSpecialChart = ({ReactFC}) => {
  return (
    <ReactFC {...chartConfigs}/>
  );
};

export {TwoDSpecialChart};