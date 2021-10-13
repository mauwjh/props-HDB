import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

const LineGraph = ({ data }) => {
  

  return (
    <div style={{maxWidth: '25%', margin: '0 auto'}}>

    <VictoryChart
  >
    <VictoryLine
    labels={({ datum }) => datum.y}
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #fefefe"}
    }}
    data={data}
    />
     <VictoryAxis style={{ 
    axis: {stroke: "transparent"}, 
    ticks: {stroke: "transparent"},
  }} />
  </VictoryChart>
    </div>
  );
};

export default LineGraph;
