import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Food from "./components/food";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-warm-light">
    <Food />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
