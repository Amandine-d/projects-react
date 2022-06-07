import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  //with the spread operator dataPointValues will be deconstructed in 12 different values instead of an array

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint =>
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      )}
    </div>
  )
};

export default Chart;