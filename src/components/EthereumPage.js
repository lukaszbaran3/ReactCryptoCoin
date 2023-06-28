import React, { useState, useEffect } from "react";
import "../css/CryptoPage.css";
import "../css/BackButton.css";
import BackButton from "./BackButton";

const EthereumPage = () => {
  const [ethereumData, setEthereumData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        );
        const data = await response.json();
        setEthereumData(data);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchData();
  }, []);

  if (!ethereumData) {
    return <div>Loading...</div>;
  }
  const dailyChange = ethereumData.RAW.ETH.USD.CHANGEPCT24HOUR.toFixed(2);
  return (
    <div className="crypto-page">
      <BackButton />
      <div className="crypto-image">
        <img
          src="https://www.cryptocompare.com/media/37746238/eth.png"
          alt="Ethereum"
        />
        <h2>Ethereum</h2>
      </div>
      <div className="crypto-description">
        <div className="crypto-description-top">
          <div>Price: ${ethereumData.RAW.ETH.USD.PRICE}</div>
          <div>24h Change: {dailyChange}%</div>
          <div>Symbol: ETH</div>
        </div>
        <p className="crypto-description-scroll">
          Ethereum is a decentralized blockchain with smart contract
          functionality. Ether is the native cryptocurrency of the platform.
          Among cryptocurrencies, ether is second only to bitcoin in market
          capitalization. It is open-source software. Ethereum was conceived in
          2013 by programmer Vitalik Buterin. Additional founders of Ethereum
          included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph
          Lubin. In 2014, development work began and was crowdfunded, and the
          network went live on 30 July 2015. 7Ethereum allows anyone to deploy
          permanent and immutable decentralized applications onto it, with which
          users can interact. Decentralized finance (DeFi) applications provide
          financial instruments which do not directly rely on financial
          intermediaries like brokerages, exchanges, or banks. This facilitates
          borrowing against cryptocurrency holdings or lending them out for
          interest. Ethereum also allows users to create and exchange
          non-fungible tokens (NFTs), which are tokens that can be tied to
          unique digital assets, such as images. Additionally, many other
          cryptocurrencies utilize the ERC-20 token standard on top of the
          Ethereum blockchain and have utilized the platform for initial coin
          offerings. On 15 September 2022, Ethereum transitioned its consensus
          mechanism from proof-of-work (PoW) to proof-of-stake (PoS) in an
          upgrade process known as "the Merge". This has cut Ethereum's energy
          usage by 99%.
        </p>
      </div>
    </div>
  );
};

export default EthereumPage;
