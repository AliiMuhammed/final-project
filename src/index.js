import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/index.css";
import { RouterProvider } from "react-router";
import Router from "./Router";
import "@fontsource/barlow-semi-condensed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
