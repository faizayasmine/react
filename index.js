import React from "react";
import ReactDOM from'react-dom/client';
import'./index.css';
import App from'./App';
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
