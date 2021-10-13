import { Typography } from "@mui/material";
import React from "react";
import "./Information.css";
import { Link } from "react-router-dom";

const Information = ({ headers, values, searchCriteria, data }) => {
  const clickable = ['streetName', 'town', 'blockNum', 'flatType', 'squareArea']

  return (
    <div className="info-container">
      <Typography component='span'>
        <div className="info-header">{headers}</div>
        <div className="info-value">{
          clickable.includes(searchCriteria) ? searchCriteria === 'blockNum' ? <Link
          to={`/criteria/address-${data.blockNum + " " + data.streetName}`}
          style={{
            textDecoration: "none",
            color: "#084c61",
            fontWeight: 500,
            
          }}
        >
          {headers === "Resale Price" || headers === "Price/sqft"
            ? `S$${values?.toLocaleString()}`
            : values}
        </Link> : <Link
          to={`/criteria/${searchCriteria}-${data[searchCriteria]}`}
          style={{
            textDecoration: "none",
            color: "#084c61",
            fontWeight: 500,
          }}
        >
          {headers === "Resale Price" || headers === "Price/sqft"
            ? `S$${values?.toLocaleString()}`
            : values}
        </Link> : 
            headers === "Resale Price" || headers === "Price/sqft"
              ? `S$${values?.toLocaleString()}`
              : values
        }
        </div>
      </Typography>
    </div>
  );
};

export default Information;
