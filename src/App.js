import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Pesquisar from "./pages/Pesquisar/Pesquisar";
import Adicionar from "./pages/Adicionar/Adicionar";
import Historico from "./pages/Historico/Historico";

import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#fff",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#009adf",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pesquisar">
            <Pesquisar />
          </Route>
          <Route path="/adicionar">
            <Adicionar />
          </Route>
          <Route path="/historico">
            <Historico />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
