import React from "react";
import { createRoot } from "react-dom/client";
import Site from "./index";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
