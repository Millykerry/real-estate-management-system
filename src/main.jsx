import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PropertContext } from "./contexts/PropertyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrap app component with context so as to get access to all the props inside the property context */}
    <PropertContext>
      <App />
    </PropertContext>
  </StrictMode>
);
