import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import CryptoMarket from "./CryptoMarket";
import MainView from "./MainView";
import "../css/App.css";
import BitcoinPage from "./BitcoinPage";
import EthereumPage from "./EthereumPage";
import DogecoinPage from "./DogecoinPage";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainView />
              <CryptoMarket />
              <AboutUs />
              <Contact />
            </>
          }
        />
        <Route path="/bitcoin" element={<BitcoinPage />} />
        <Route path="/ethereum" element={<EthereumPage />} />
        <Route path="/dogecoin" element={<DogecoinPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
