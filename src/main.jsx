import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from '/src/store'
import { Provider } from 'react-redux'

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
