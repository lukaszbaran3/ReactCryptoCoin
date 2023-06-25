import React, { useEffect, useState } from "react";
import "./css/Change.css";
import "./css/CryptoCards.css";
import { Link } from "react-router-dom";

const EthereumCard = () => {
  const [ethereumData, setEthereumData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        );
        const data = await response.json();
        const ethereum = data.DISPLAY.ETH.USD;

        setEthereumData(ethereum);
      } catch (error) {
        console.log("Something went wrong:", error);
      }
    };

    fetchData();
  }, []);

  if (!ethereumData) {
    return <div>Loading...</div>;
  }

  const iconUrl = `https://www.cryptocompare.com${ethereumData.IMAGEURL}`;

  return (
    <Link to="ethereum">
      <div className="dogecoin">
        <img src={iconUrl} alt={ethereumData.FROMSYMBOL} />
        <div className="crypto-name">
          <h2>Ethereum</h2>
          <p
            className={
              ethereumData.CHANGEPCT24HOUR > 0
                ? "positive-change"
                : "negative-change"
            }
          >
            {ethereumData.CHANGEPCT24HOUR}%
          </p>
        </div>
        <p>{ethereumData.PRICE}</p>
      </div>
    </Link>
  );
};

export default EthereumCard;
