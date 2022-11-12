import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Component.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/layout"
//const baseURL = process.env.REACT_APP_DOMAIN
/*
const baseURL = "http://localhost:8000/";


export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = "JWT " + localStorage.getItem("access");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
    
  },
 err =>  {
    console.log(err);
    console.log('hello')
    return Promise.reject(err);
  }

);

*/
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
