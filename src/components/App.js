import { Route, Routes, BrowserRouter } from "react-router-dom";
import CryptoMarket from "./CryptoMarket";
import MainView from "./MainView";
import "../css/App.css";
import BitcoinPage from "./BitcoinPage";
import EthereumPage from "./EthereumPage";
import DogecoinPage from "./DogecoinPage";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import DropdownMenu from "./DropdownMenu";
import News from "./News";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <DropdownMenu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainView />
              <CryptoMarket />
              <AboutUs />
              <News />
              <Contact />
            </>
          }
        />
        <Route path="/bitcoin" element={<BitcoinPage />} />
        <Route path="/ethereum" element={<EthereumPage />} />
        <Route path="/dogecoin" element={<DogecoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
