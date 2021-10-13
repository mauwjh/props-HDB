// import React from "react";
// import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

// const LineGraph = ({ data, minValue }) => {
//     return (
//     <div style={{ maxWidth: "50%", margin: "0 auto", marginBottom: '2%', border: '1px solid #bcdbdc', borderRadius: '5px', fontSize: '8px' }}>
//       <VictoryChart minDomain={{ y: minValue }} height={200} theme={VictoryTheme.material}>
//         <VictoryLine
//           labels={({ datum }) => datum.y}
//           style={{
//             data: { stroke: "#4f6d7a" },
//             parent: { border: "1px solid #fefefe" },
//           }}
//           data={data}
//         />
//         <VictoryAxis
//           style={{
//             axis: { stroke: "transparent" },
//             ticks: { stroke: "transparent" },
//           }}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default LineGraph;

import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "@fontsource/mulish/400.css";

const LineGraph = ({ data }) => (
        <ResponsiveLine
            theme={{"textColor": "#084c61", fontSize: '13px', fontFamily: 'mulish'}}
          data={data}
          margin={{ top: 50, right: 40, bottom: 125, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Year",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          enableGridX={false}
          curve={"linear"}
        />
);

export default LineGraph;
