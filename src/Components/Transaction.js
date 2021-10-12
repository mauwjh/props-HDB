import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Information from "./Information";
import MapAPI from "./MapAPI";
import "./Transaction.css";
import TransactionTable from "./TransactionTables";
import Typography from '@mui/material/Typography';

const Transaction = (props) => {
  const params = useParams().id;
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({});
  const headers = {
    town: "Town",
    price: "Resale Price",
    blockNum: "Block Number",
    streetName: "Street Name",
    flatType: "Flat Type",
    squareArea: "Area (sqm)",
    leaseDate: "Lease Start Date",
    flatModel: "Flat Model",
    resaleDate: "Transaction Date",
  };

  useEffect(() => {
    const transaction = props.data?.find(
      (element) => parseInt(element._id) === parseInt(params)
    );

    setData({
      id: transaction?._id,
      town: transaction?.town,
      flatType: transaction?.flat_type,
      leaseDate: transaction?.lease_commence_date,
      squareArea: parseInt(transaction?.floor_area_sqm),
      price: parseInt(transaction?.resale_price),
      flatModel: transaction?.flat_model,
      blockNum: transaction?.block,
      streetName: transaction?.street_name,
      resaleDate: transaction?.month,
      storeyRange: transaction?.storey_range,
    });

    const address = `${data?.blockNum}+${data?.streetName
      ?.split(" ")
      .join("+")}`;

    if (data?.blockNum) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          setLocation({
            address: data.results[0].formatted_address,
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          })
        )
        .catch(() => console.log("error"));
    }
  }, [props.data, params, data.blockNum, data.streetName]);

  console.log(location);
  console.log(data);

  return (
    <>
      <Typography variant='body1' component='h2'>
      <h2 className='header'>Blk {data.blockNum}, {data?.streetName?.toLowerCase().split(' ').map(a => a.slice(0,1).toUpperCase()+a.slice(1)).join(' ')}</h2>
      <MapAPI location={location} />
      <div className='header' style={{marginTop: '-0.75%', fontWeight: 400}}>*1km circle radius</div>
      <div className="transaction-container">
        {Object.keys(headers).map((element, index) => {
          return (
            <Information
              key={index}
              headers={headers[element]}
              values={data[element]}
            />
          );
        })}
      </div>
      <h2 className='header' style={{position: 'relative', zIndex: 5}}>Transaction history for similar {data?.flatType?.slice(0,2)+data?.flatType?.slice(2,3)?.toUpperCase()+data?.flatType?.toLowerCase()?.slice(3)} units in {data?.town?.toLowerCase().split(' ').map(a => a.slice(0,1).toUpperCase()+a.slice(1)).join(' ')} Town</h2>
      </Typography>
      <TransactionTable data={props.data} transaction={data} />
    </>
  );
};

export default Transaction;
