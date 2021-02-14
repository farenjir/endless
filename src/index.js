import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// App Store
import App from "./containers/App";
import { store } from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);