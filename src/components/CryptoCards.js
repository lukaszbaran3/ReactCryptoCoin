import React from "react";
import "../css/CryptoCards.css";
import BitcoinCard from "./BitcoinCard";
import EthereumCard from "./EthereumCard";
import DogecoinCard from "./DogecoinCard";

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
