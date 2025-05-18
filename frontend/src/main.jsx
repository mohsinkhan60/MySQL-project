import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./config/routers.jsx";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
