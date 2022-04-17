import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./routes/app";
import store from "./redux-config/store";
import "./styles/global.scss";
import "./styles/icons.scss";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
