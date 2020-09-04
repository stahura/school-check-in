import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import "./styles/global.css"
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme"


var destination = document.querySelector("#root");

ReactDOM.render(
  
  <MuiThemeProvider theme={theme}>
    <App/>
  </MuiThemeProvider>,
  destination
);


