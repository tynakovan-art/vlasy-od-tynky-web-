import React from "react";
import { createRoot } from "react-dom/client";
import Site from "./index.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
