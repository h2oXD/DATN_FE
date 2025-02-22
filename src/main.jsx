import React from "react";
import App from "./App.jsx";
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./assets/js/theme.min.js";
import "./assets/libs/@popperjs/core/dist/umd/popper.min.js";
import "./assets/libs/bootstrap/dist/js/bootstrap.min.js";
import "./assets/libs/glightbox/dist/js/glightbox.min.js";
import "./assets/libs/simplebar/dist/simplebar.min.js";

import { ToastProvider } from "./contexts/ToastProvider.jsx";
import { StoreProvider } from "./contexts/StoreProvider.jsx";
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
