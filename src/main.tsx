import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Site from "./index"; // pokud máš hlavní komponentu v src/index.tsx

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
