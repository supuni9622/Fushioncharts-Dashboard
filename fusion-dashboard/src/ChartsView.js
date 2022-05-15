import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import {TwoDChart} from "./chartComponents";
import {TwoDSpecialChart} from "./chartComponents";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartsViews = () => {
  return (
    <>
     <TwoDChart ReactFC={ReactFC}/>
      <TwoDSpecialChart ReactFC={ReactFC}/>
    </>
  );
};

export default ChartsViews;