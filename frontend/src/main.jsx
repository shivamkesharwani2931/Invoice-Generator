
// import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./App.jsx";
import { invoiceflow_Store } from "./Store/Store";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={invoiceflow_Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
