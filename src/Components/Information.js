import { Typography } from "@mui/material";
import React from "react";
import './Information.css'

const Information = ({ headers, values }) => {
  return (
    <div className='info-container'>
      <Typography>
      <div className='info-header'>{headers}</div>
      <div className='info-value'>{isNaN(values) ? values : values.toLocaleString()}</div>
      </Typography>
    </div>
  );
};

export default Information;
