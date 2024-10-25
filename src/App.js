import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/Products/ProductsPage";
import Orders from "./pages/Orders/Orders";
import Clients from "./pages/Clients/Clients";
import Reports from "./pages/Reports/Reports";
import Experts from "./pages/Experts/Experts";
import NotFound from "./pages/NotFound/NotFound";
import Feedback from './pages/Feedback/Feedback';
import ProfilePage from "./pages/Profilepage/Profilepage";
import Settings from "./pages/Settings/Settings";
import Wallet from "./pages/Wallet/Wallet";
import Influencers from "./pages/Influencers/Influencers";
import Sweply from "./pages/Sweply/Sweply";
import Marketplace from "./pages/Marketplace/Marketplace";
import Mobile from "./pages/Mobile/Mobile";
import Themes from "./pages/Themes/Themes";

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
          path="/experts"
          element={<Experts darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/feedback"
          element={<Feedback darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/profilepage"
          element={<ProfilePage darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/experts"
          element={<Experts darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/settings"
          element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/wallet"
          element={<Wallet darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/influencers"
          element={<Influencers darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/sweply"
          element={<Sweply darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/marketplace"
          element={<Marketplace darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/mobile-app"
          element={<Mobile darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/matketplace/themes"
          element={<Themes darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="*"
          element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
