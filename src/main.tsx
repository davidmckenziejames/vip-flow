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
import ControlledBoard from "./pages/B";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe("pk_test_e6umQ80qsQLGjU8mcciTuToS009U4VxJX3");

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
};

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/vudu" element={<Vudu />} />
            <Route path="/admin" element={<Manage />} />
            <Route path="/pestadmin" element={<PestAdmin />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/roi" element={<ROICalculator />} />
            <Route path="/dyno" element={<Pest />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/return" element={<Return />} />
            <Route path="/leads" element={<ControlledBoard />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
