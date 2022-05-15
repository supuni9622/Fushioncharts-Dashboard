import React from 'react';
import {CategoriesData} from "../data";

const chartConfigs = {
    type : "doughnut3d",
    width : "700",
    height : "400",
    dataFormat : "json",
    dataSource : {
        chart : {
            "caption": "Split of Revenue by Product Categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        data: CategoriesData
    }
}

const Doughnut3DChart = ({ReactFC}) => {
  return (
    <ReactFC {...chartConfigs}/>
  );
};

export {Doughnut3DChart};