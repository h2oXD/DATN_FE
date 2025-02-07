import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/theme.min.css";
import "./assets/js/theme.min.js";

import "./assets/fonts/feather/feather.css";
import "./assets/libs/bootstrap-icons/font/bootstrap-icons.min.css";
import "./assets/libs/@popperjs/core/dist/umd/popper.min.js";
import "./assets/libs/bootstrap/dist/js/bootstrap.min.js";
import "./assets/libs/glightbox/dist/js/glightbox.min.js";

//<!-- Favicon icon-->
// import "./assets/images/favicon/favicon.ico";
//<!-- darkmode js -->
// import "./assets/js/vendors/darkMode.js";
//<!-- Libs CSS -->
// import "./assets/libs/simplebar/dist/simplebar.min.css";
//<!-- Theme CSS -->
// import "./assets/libs/tiny-slider/dist/tiny-slider.css";
// import "./assets/js/vendors/sidebarMenu.js";

//<!-- Scripts -->
//<!-- Libs JS -->

// import "./assets/libs/simplebar/dist/simplebar.min.js";
//<!-- Theme JS -->
// import "./assets/libs/tiny-slider/dist/min/tiny-slider.js";
// import "./assets/js/vendors/tnsSlider.js";

// import './assets/libs/prismjs/prism.js';
// import "./assets/libs/prismjs/components/prism-scss.min.js";
// import "./assets/libs/prismjs/plugins/toolbar/prism-toolbar.min.js";
// import "./assets/libs/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
// import "./assets/js/vendors/glight.js";
// import "./assets/libs/typed.js/dist/typed.umd.js";
// import "./assets/js/vendors/typed.js";
// import "./assets/libs/prismjs/themes/prism-okaidia.min.css";
// import "./assets/js/vendors/validation.js";

import { ToastProvider } from "./contexts/ToastProvider.jsx";
import { StoreProvider } from "./contexts/StoreProvider.jsx";

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
