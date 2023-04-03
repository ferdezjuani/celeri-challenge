import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RegisterProvider } from "./context/RegisterStepper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <App />
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
