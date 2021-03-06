import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import ButtonAppBar from "./Components/Navbar";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import Transaction from "./Components/Transaction";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import SearchSpecific from "./Components/SearchSpecific";
import Search from "./Components/Search";
import Home from "./Components/Home";
import About from "./Components/About";

let theme = createTheme({
  typography: {
    fontFamily: "Mulish, Arial",
    body1: {
      color: "#084c61",
    },
    button: {
      textTransform: "none",
      fontSize: "15px",
      padding: "5px",
      marginLeft: "5px",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#084C61",
      light: "#a8acbd",
      dark: "#a8acbd",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [data, setData] = useState();

  const url =
    "https://data.gov.sg/api/action/datastore_search?resource_id=f1765b54-a209-4718-8d38-a39237f502b3&limit=500000";

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
            <Route path="/criteria/:criteria">
              <SearchSpecific data={data?.records} />
            </Route>
            <Route path="/search/:id">
              <Transaction data={data?.records} />
            </Route>
            <Route path="/search">
              <Search data={data?.records} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home data={data?.records}/>
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
