import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// global styles
import "leaflet/dist/leaflet.css";
import "./style/main.scss";

const DOMRoot = createRoot(document.getElementById("root"));
DOMRoot.render(<App />);
