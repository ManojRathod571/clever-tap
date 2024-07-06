import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import clevertap from "clevertap-web-sdk";

clevertap.spa = true;
// clevertap.init("844-445-ZZ6Z");
clevertap.init("TEST-KKW-488-K86Z");

clevertap.setLogLevel(3);
//  0: disable all logs
//  1: display only errors
//  2: display errors and info
//  3: display all logs

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
