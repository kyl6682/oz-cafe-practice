import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./context/menuContext.jsx";
import { CartProvidor } from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MenuProvider>
      <CartProvidor>
        <App />
      </CartProvidor>
    </MenuProvider>
  </BrowserRouter>
);
