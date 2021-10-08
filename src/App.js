import "./App.css";
import { useState, useEffect } from "react";
// import Map from "./Components/Map";
import ButtonAppBar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DataTable from "./Components/DataTable";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a8acbd",
      light: "#a8acbd",
      dark: "#a8acbd",
    },
  },
});

function App() {
  const [data, setData] = useState();

  const url =
    "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=105789";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      })
      .catch(() => console.log("error"));
  }, []);

  // const location = {
  //   address: "374 Laurel Wood Avenue",
  //   lat: 1.325416,
  //   lng: 103.791898,
  // };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ButtonAppBar />

      <DataTable data={data?.records} />
      </ThemeProvider>
    </div>
  );
}

export default App;
