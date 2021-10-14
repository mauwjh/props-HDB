import React, { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";
import "./Autocomplete.css";
import Typography from "@mui/material/Typography";
import Map from "./MapAPI";
import DataTable from "./DataTable";
import HomeGraph from "./HomeGraph";

const Home = ({ data }) => {
  const [location, setLocation] = useState(null);
  const [town, setTown] = useState(null);
  const [country, setCountry] = useState(null);
  const [dataSet, setDataSet] = useState();

  useEffect(() => {
    setDataSet(
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
          storeyRange: element.storey_range,
        }))
        ?.filter((element) =>
          element?.town
            ?.toString()
            ?.toLowerCase()
            .includes(town?.toString()?.toLowerCase())
        )
    );
  }, [data, town]);

  console.log(dataSet);

  return (
    <Typography component="span">
      {country === 'Singapore' ? <div className="main-container" style={{height: 'max-content'}}>
        <h2 className="home-header">Find My HDB</h2>
        <div className="autocomplete-container">
          <Autocomplete
            setLocation={setLocation}
            setTown={setTown}
            setCountry={setCountry}
          />
        </div>
      </div> : <div className="main-container">
        <h2 className="home-header">Find My HDB</h2>
        <div className="autocomplete-container">
          <Autocomplete
            setLocation={setLocation}
            setTown={setTown}
            setCountry={setCountry}
          />
        </div>
      </div>}
      {country === 'Singapore' && <>
      <Map location={location} />
      <div className='header' style={{marginTop: '-0.75%', fontWeight: 400, fontSize: 'clamp(0.7rem, 2.5vw, 1rem)'}}>*1km circle radius</div>
      <div style={{ paddingLeft: "20px", margin: "0 auto" }}>
        <h2 className="header" style={{fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)'}}>
          Transactions in{" "}
          {town
            ?.toLowerCase()
            .split(" ")
            .map((a) => a.slice(0, 1).toUpperCase() + a.slice(1))
            .join(" ")}{" "}
          Town
        </h2>
      </div>
      <DataTable data={dataSet} />
      <HomeGraph data={dataSet} town={town} />
      </>}
    </Typography>
  );
};

export default Home;
