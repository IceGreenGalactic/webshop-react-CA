import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import Theme from "./styles/theme.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import { store } from "./pages/Cart/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </StrictMode>
);
