import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import ButtonAppBar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DataTable from "./Components/DataTable";
import Transaction from "./Components/Transaction";

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

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <div className="App">
        <main>
          <Switch>
            <Route path="/search/:id">
              <Transaction data={data?.records} />
            </Route>
            <Route path="/search">
              <DataTable data={data?.records} />
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
