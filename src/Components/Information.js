import React from "react";
import './Information.css'

const Information = ({ headers, values }) => {
  return (
    <div className='info-container'>
      <div className='info-header'>{headers}</div>
      <div className='info-value'>{values}</div>
    </div>
  );
};

export default Information;
