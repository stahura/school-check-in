import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./router"
import "./styles/global.css"


var destination = document.querySelector("#root");

ReactDOM.render(
    <Router />,
  destination
);


