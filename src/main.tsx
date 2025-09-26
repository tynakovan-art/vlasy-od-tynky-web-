import React from "react";
import { createRoot } from "react-dom/client";
import Site from "./index";
import "./index.css"; // DŮLEŽITÉ: sem se natahuje zkompilovaný Tailwind

const el = document.getElementById("root")!;
createRoot(el).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
