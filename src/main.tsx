//import React from "react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/roboto-mono/300.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/500.css";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";

import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import theme from "./theme";
import { HelmetProvider } from "react-helmet-async";
import Vudu from "./pages/Vudu";
import Manage from "./pages/Manage";
import Hotel from "./pages/Hotel";
import ROICalculator from "./components/Calculator";
import Pest from "./pages/Pest";
import PestAdmin from "./pages/Pest-Admin";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vudu" element={<Vudu />} />
            <Route path="/admin" element={<Manage />} />
            <Route path="/pestadmin" element={<PestAdmin />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/roi" element={<ROICalculator />} />
            <Route path="/dyno" element={<Pest />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
