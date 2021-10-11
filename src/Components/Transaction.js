import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "./Map";

const Transaction = (props) => {
  const params = useParams().id;
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const transaction = props.data?.find((element) => element._id == params);

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

  return <Map location={location} zoomLevel={17} />;
};

export default Transaction;
