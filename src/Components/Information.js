import { Typography } from "@mui/material";
import React from "react";
import './Information.css'

const Information = ({ headers, values }) => {
  return (
    <div className='info-container'>
      <Typography>
      <div className='info-header'>{headers}</div>
      <div className='info-value'>{headers === 'Resale Price' ? `S$${values?.toLocaleString()}` : values}</div>
      </Typography>
    </div>
  );
};

export default Information;
