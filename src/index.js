import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import AppContainer from "./components/App/AppContainer";

const documentElem = document.getElementById("root");
const appProps = {};
const appChildren = null;

const componentElem = React.createElement(AppContainer, appProps, appChildren);
ReactDOM.render(componentElem, documentElem);
