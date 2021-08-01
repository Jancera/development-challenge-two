import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../assets/medcloud.svg";
import useStyles from "./headerStyles";

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const navigate = (route) => history.push(route);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/search") {
      setValue(1);
    } else if (location.pathname === "/add") {
      setValue(2);
    } else if (location.pathname === "/history") {
      setValue(3);
    }
  }, [location]);

  const history = useHistory();

  return (
    <AppBar
      position="static"
      elevation={0}
      className={classes.container}
    >
      <img className={classes.logo} src={logo} alt="Logo" />
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
      >
        <Tab
          label="Home"
          disableRipple
          onClick={() => navigate("/")}
        />
        <Tab
          label="Pesquisar"
          disableRipple
          onClick={() => navigate("/search")}
        />
        <Tab
          label="Adicionar"
          disableRipple
          onClick={() => navigate("/add")}
        />
        <Tab
          label="Histórico"
          disableRipple
          onClick={() => navigate("/history")}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;
