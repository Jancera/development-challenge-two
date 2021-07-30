import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../assets/medcloud.svg";
import "./Header.css";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const navigate = (route) => history.push(route);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/pesquisar") {
      setValue(1);
    } else if (location.pathname === "/adicionar") {
      setValue(2);
    } else if (location.pathname === "/historico") {
      setValue(3);
    }
  }, [location]);

  const history = useHistory();

  return (
    <AppBar
      position="static"
      elevation={0}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <img className="logo" src={logo} alt="Logo" />
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
          onClick={() => navigate("/pesquisar")}
        />
        <Tab
          label="Adicionar"
          disableRipple
          onClick={() => navigate("/adicionar")}
        />
        <Tab
          label="Histórico"
          disableRipple
          onClick={() => navigate("/historico")}
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;
