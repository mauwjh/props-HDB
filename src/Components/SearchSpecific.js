import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTable from "./DataTable";
import { Typography } from "@mui/material";

const SearchSpecific = ({ data }) => {
  const [dataSet, setData] = useState();
  const params = useParams().criteria;
  const paramsKey = params.split("-")[0];
  const paramsValue = params.split("-")[1];
  const headers = {
    town: "Town",
    price: "Resale Price",
    pricePerSf: "Price/sqft",
    squareArea: "Area (sqm)",
    blockNum: "Block Number",
    streetName: "Street Name",
    flatType: "Flat Type",
    leaseDate: "Lease Start Date",
    flatModel: "Flat Model",
    resaleDate: "Transaction Date",
    address: 'Address'
  };
  const paramsHeader = headers[paramsKey]

  useEffect(() => {
    setData(
      data
        ?.map((element) => ({
          id: element._id,
          town: element.town,
          blockNum: element.block,
          streetName: element.street_name,
          flatType: element.flat_type,
          leaseDate: element.lease_commence_date,
          squareArea: parseInt(element.floor_area_sqm),
          price: parseInt(element.resale_price),
          address: element.block + " " + element.street_name,
          month: element.month,
          storeyRange: element.storey_range
        }))
        .filter(
          (element) => element[paramsKey].toString() === paramsValue.toString()
        )
    );
  }, [data, paramsKey, paramsValue]);

  return (
    <div>
      <Typography variant='body1' component='div'>
      <h2>
        Now showing units with {paramsHeader} of {paramsValue}
      </h2>
    </Typography>
      {dataSet && <DataTable data={dataSet} />}
    </div>
  );
};

export default SearchSpecific;
