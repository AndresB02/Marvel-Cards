import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lenguajes from "./datos/lenguajes.js";
import LenguajesVistas from "./vistas/LenguajesVistas.jsx";

const router = [{ path: "/", element: <App /> }];

Lenguajes.forEach((len) => {
  router.push({
    path: len.ntitulo,
    element: <LenguajesVistas len={len} />,
  });
});

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
