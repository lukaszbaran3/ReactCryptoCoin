import React, { useEffect, useState } from "react";
import "./css/Change.css";
import "./css/CryptoCards.css";
import "./css/BitcoinCard.css";
import { Link } from "react-router-dom";

const BitcoinCard = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD"
        );
        const data = await response.json();
        const bitcoin = data.DISPLAY.BTC.USD;

        setBitcoinData(bitcoin);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    fetchData();
  }, []);

  if (!bitcoinData) {
    return <div>Loading...</div>;
  }

  const iconUrl = `https://www.cryptocompare.com${bitcoinData.IMAGEURL}`;

  return (
    <Link to="bitcoin">
      <div className="bitcoin">
        <img src={iconUrl} alt={bitcoinData.FROMSYMBOL} />
        <div className="crypto-name">
          <h2>Bitcoin</h2>
          <p
            className={
              bitcoinData.CHANGEPCT24HOUR > 0
                ? "positive-change"
                : "negative-change"
            }
          >
            {bitcoinData.CHANGEPCT24HOUR}%
          </p>
        </div>
        <p>{bitcoinData.PRICE}</p>
      </div>
    </Link>
  );
};

export default BitcoinCard;
