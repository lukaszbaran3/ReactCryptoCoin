import React from "react";
import "./css/CryptoCards.css";
import BitcoinCard from "./BitcoinCard";
import EthereumCard from "./EthereumCard";
import DogecoinCard from "./DogecoinCard";
import {
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

function CryptoCards() {
  return (
    <div className="cards">
      <BitcoinCard />
      <EthereumCard />
      <DogecoinCard />
    </div>
  );
}

export default CryptoCards;
