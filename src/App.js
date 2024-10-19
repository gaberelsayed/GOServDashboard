import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./pages/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import Orders from "./pages/Orders/Orders";
import Clients from "./pages/Clients/Clients";
import Reports from "./pages/Reports/Reports";
import Mahally from "./pages/Mahally/Mahally";
import Influencers from "./pages/Influencers/Influencers";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/products"
          element={
            <ProductsPage darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route
          path="/orders"
          element={<Orders darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/clients"
          element={<Clients darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/reports"
          element={<Reports darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      <Route
          path="/mahally"
          element={<Mahally darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
          <Route
          path="/influencers"
          element={<Influencers darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
