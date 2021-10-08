import "./App.css";
// import { useState, useEffect } from "react";
import Map from "./Components/Map";
import EnhancedTable from "./Components/DataTable";

function App() {
  // const [data, setData] = useState();

  // const url =
  //   "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     })
  //     .catch(() => console.log("error"));
  // }, []);

  const location = {
    address: "374 Laurel Wood Avenue",
    lat: 1.325416,
    lng: 103.791898,
  };

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
