import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";

const Search = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(
      props.data?.map((element) => ({
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
    );
  }, [props.data]);

  return (<div>
    <DataTable data={data} />
  </div>);
};

export default Search;