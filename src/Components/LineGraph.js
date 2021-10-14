import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "@fontsource/mulish/400.css";

const LineGraph = ({ data }) => (
        <ResponsiveLine
            theme={{"textColor": "#084c61", fontSize: 'clamp(0.5rem, 2.5vw, 0.8rem)', fontFamily: 'mulish'}}
          data={data}
          height={400}
          margin={{ top: 40, right: 50, bottom: 130, left: 70 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          yFormat=" >-,.0f"
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
          curve={"natural"}
          legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 78,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
);

export default LineGraph;
