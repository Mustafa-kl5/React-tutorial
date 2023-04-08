import React from "react";
import "../style/Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          key={dataPoint.label}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
