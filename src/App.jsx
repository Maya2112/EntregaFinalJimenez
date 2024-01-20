import "./App.css";

import { CartProvider } from "./context/CartContext";
import { DateProvider } from "./context/DateContext";
import AppRoutes from "./router/AppRoutes";

function App() {

  return (
      <CartProvider>
        <DateProvider>
          <AppRoutes />
          </DateProvider>
      </CartProvider>
  );
}

export default App;