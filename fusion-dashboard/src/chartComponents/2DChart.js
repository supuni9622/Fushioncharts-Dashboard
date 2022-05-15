import React from 'react';
import {CountryData} from "../data";

const chartConfigs = {
    type : "column2d",
    width : "700",
    height : "400",
    dataFormat : "json",
    dataSource : {
        chart : {
            caption : "Countries With Most Oil Reserves [2017-18]",
            subCaption: "In MMbbl = One Million barrels",
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)", 
            numberSuffix:"K",
            theme : "fusion"
        },
        data: CountryData
    }
}

const TwoDChart = ({ReactFC}) => {
  return (
    <ReactFC {...chartConfigs}/>
  );
};

export {TwoDChart};