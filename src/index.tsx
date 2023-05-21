import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider as ProviderReduxTK } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ProviderReduxTK store={store}>
    <App />
  </ProviderReduxTK>
);
