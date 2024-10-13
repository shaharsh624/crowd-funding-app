import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context";
import { LineaSepolia } from "@thirdweb-dev/chains";

createRoot(document.getElementById("root")).render(
  <ThirdwebProvider
    activeChain={LineaSepolia}
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
