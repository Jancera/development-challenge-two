import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Add from "./pages/Add/Add";
import History from "./pages/History/History";

import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#009adf",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeightLight: "500",
    fontWeightRegular: "600",
    fontWeightMedium: "700",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
};

export default App;
