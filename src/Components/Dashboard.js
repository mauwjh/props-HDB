import React, { useState, useEffect } from "react";
import LineGraph from "./LineGraph";
import Typography from "@mui/material/Typography";

const calculateMonthlySales = (data) => {
  const dates = new Set();
  data?.map((element) => dates.add(element.month.slice(0, 4)));
  let tempArr = [];
  for (let i = 0; i < dates.size; i++) {
    tempArr[i] = [
      Array.from(dates)[i],
      data.reduce((a, b) => {
        b.month.slice(0, 4) === Array.from(dates)[i] &&
          a.push(Math.round(parseInt(b.price)));
        return a;
      }, []),
    ];
  }
  tempArr = tempArr.map((a) => ({
    x: a[0],
    y: Math.round(a[1].reduce((a, b) => a + b) / a[1].length),
  }));
  return [{ id: "price", color: "hsl(178, 70%, 50%)", data: tempArr }];
};

const Dashboard = ({ data }) => {
  const [salesPerMonth, setSalesPerMonth] = useState([]);

  console.log(data);

  useEffect(() => {
    data && setSalesPerMonth(calculateMonthlySales(data));
  }, [data]);

  return (
    <Typography component="span">
      <div
        style={{
          margin: "0 auto",
          height: "45vh",
          minHeight: "35vh",
          marginBottom: "3%",
          width: "80%",
          maxWidth: "1800px",
          border: "1px solid #bcdbdc",
          borderRadius: "5px",
          padding: '0px 20px 0px 20px',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ marginBottom: "-20px", marginTop: '25px', width: "100%", textAlign: "left",}}>
          Average Transaction Price for Similar Units
        </h2>
        <LineGraph data={salesPerMonth} />
      </div>
    </Typography>
  );
};

export default Dashboard;
