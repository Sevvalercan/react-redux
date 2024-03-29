import React from "react";
import { createRoot } from "react-dom/client"; // createRoot react-dom/client üzerinden alınmalıdır
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
