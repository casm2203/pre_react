import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import './global.css'
import Badge from "./components/Badges";

const container = document.getElementById("root");

ReactDOM.render(<Badge firstName="Cristian" lastName="Suarez" jobTitle="Frontend" twitter="Csuarez"  />, container);