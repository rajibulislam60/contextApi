import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Contextprovider from "./context/Contextprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contextprovider>
      <App />
    </Contextprovider>
  </StrictMode>
);
