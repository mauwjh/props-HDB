import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Information from "./Information";
import MapAPI from "./MapAPI";
import "./Transaction.css";
import TransactionTable from "./TransactionTables";
import Typography from '@mui/material/Typography';
import TransactionGraph from "./TransactionGraph";

const Transaction = (props) => {
  const params = useParams().id;
  const [nearby, setNearby] = useState()
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({});
  const headers = {
    town: "Town",
    price: "Resale Price",
    pricePerSf: "Price/sqft",
    squareArea: "Area (sqm)",
    blockNum: "Block Number",
    streetName: "Street Name",
    storeyRange: "Storey Range",
    flatType: "Flat Type",
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
      squareArea: transaction?.floor_area_sqm,
      price: parseInt(transaction?.resale_price),
      pricePerSf: Math.round(transaction?.resale_price / (transaction?.floor_area_sqm * 10.7639)),
      flatModel: transaction?.flat_model,
      blockNum: transaction?.block,
      streetName: transaction?.street_name,
      resaleDate: transaction?.month,
      storeyRange: transaction?.storey_range,
      month: transaction?.month,
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
            lat: parseFloat(data.results[0].geometry.location.lat),
            lng: parseFloat(data.results[0].geometry.location.lng),
          })
        )
        .catch(() => console.log("error"));
    }
  }, [props.data, params, data.blockNum, data.streetName]);


  return (
    <>
      <Typography variant='body1' component='span'>
      <h2 className='header' style={{fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)'}}>Blk {data.blockNum}, {data?.streetName?.toLowerCase().split(' ').map(a => a.slice(0,1).toUpperCase()+a.slice(1)).join(' ')}</h2>
      <MapAPI location={location}/>
      <div className='header' style={{marginTop: '-0.75%', fontWeight: 400, fontSize: 'clamp(0.7rem, 2.5vw, 1rem)'}}>*1km circle radius</div>
      <div className="transaction-container">
        {Object.keys(headers).map((element, index) => {
          return (
            <Information
              key={index}
              headers={headers[element]}
              values={data[element]}
              data={data}
              searchCriteria={element}
            />
          );
        })}
      </div>
      <h2 className='header' style={{position: 'relative', zIndex: 5, paddingLeft: '20px', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)'}}>Transaction history for similar units in {data?.town?.toLowerCase().split(' ').map(a => a.slice(0,1).toUpperCase()+a.slice(1)).join(' ')} Town</h2>
      </Typography>
      <TransactionTable mainData={props.data} transaction={data} setNearby={setNearby}/>
      <TransactionGraph data={nearby}/>
    </>
  );
};

export default Transaction;
