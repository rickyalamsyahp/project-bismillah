import React from "react";
import "../App.css";
import "../Style/default.css";
import Home from "../Screen/Home/index";
import Dashboard from "../Screen/Dashboard/Dashboard";
import Forecasting from "../Screen/Forecasting/index";
import Clustering from "../Screen/Clustering/index";
import MapService from "../Screen/MapService/index";
import { Route, Switch } from "react-router-dom";
import Drawer from "../Component/MenuSideBar";
import Navbar from "../Component/Navbar";

export default function App() {
  // const classes = useStyles();
  return (
    <>
      <Navbar />
      <div style={{ height: "calc(100vh - 65px)", background: "#f6f6f6" }}>
        <Drawer />
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
          <Route exact path="/clustering" render={props => <Forecasting {...props} />} />
          <Route exact path="/forcasting" render={props => <Clustering {...props} />} />
          <Route exact path="/mapService" render={props => <MapService {...props} />} />
        </Switch>
      </div>
    </>
  );
}