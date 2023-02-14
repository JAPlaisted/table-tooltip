import React from "react";
import { Pie } from "@nivo/pie";

const PilytixFactorsDecreasingWinChart = ({ pilytixFactorsDecreasingWin }) => {
  const processedData = pilytixFactorsDecreasingWin.map((item) => ({
    id: item.name,
    label: item.name,
    value: item.weight.value * -1,
    message: item.message,
    description: item.weight.description
  }));

  return (
    <Pie
      data={processedData}
      width={600}
      height={400}
      labelPosition="outside"
      labelSkipRadius={12}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      tooltip={({ datum }) => (
        <div>
          <strong>{datum.data.message}</strong>
          <br />
          {datum.data.description}
        </div>
      )}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
    />
  );
};

export default PilytixFactorsDecreasingWinChart;
