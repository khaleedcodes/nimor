import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/gradient.css";
import "./styles/marquee.css";
import "./styles/scroll-bar.css";
// import "./styles/embla.css";

import ReactGA from "react-ga4";
ReactGA.initialize("G-J6LSCJYGTZ");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: "pageview from main.tsx",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
