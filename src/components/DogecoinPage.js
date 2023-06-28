import React, { useState, useEffect } from "react";
import "../css/CryptoPage.css";
import BackButton from "./BackButton";

const DodgecoinPage = () => {
  const [dogecoinData, setDogecoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD"
        );
        const data = await response.json();
        setDogecoinData(data);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchData();
  }, []);

  if (!dogecoinData) {
    return <div>Loading...</div>;
  }
  const dailyChange = dogecoinData.RAW.DOGE.USD.CHANGEPCT24HOUR.toFixed(2);
  return (
    <div className="crypto-page">
      <BackButton />
      <div className="crypto-image">
        <img
          src="https://www.cryptocompare.com/media/37746339/doge.png"
          alt="Dogecoin"
        />
        <h2>Dogecoin</h2>
      </div>
      <div className="crypto-description">
        <div className="crypto-description-top">
          <div>Price: ${dogecoinData.RAW.DOGE.USD.PRICE}</div>
          <div>24h Change: {dailyChange}%</div>
          <div>Symbol: DOGE</div>
        </div>
        <p className="crypto-description-scroll">
          Dogecoin is a cryptocurrency created by software engineers Billy
          Markus and Jackson Palmer, who decided to create a payment system as a
          "joke", making fun of the wild speculation in cryptocurrencies at the
          time. It is considered both the first "meme coin", and more
          specifically the first "dog coin". Despite its satirical nature, some
          consider it a legitimate investment prospect. Dogecoin features the
          face of the Shiba Inu dog from the "doge" meme as its logo and
          namesake. It was introduced on December 6, 2013, and quickly developed
          its own online community, reaching a peak market capitalization of
          over $85 billion on May 5, 2021. As of 2021, it is the sleeve sponsor
          of Watford Football Club. Dogecoin.com promotes the currency as the
          "fun and friendly Internet currency", referencing its origins as a
          "joke". Software engineers Billy Markus and Jackson Palmer launched
          the satirical cryptocurrency as a way to make fun of Bitcoin and the
          many other cryptocurrencies boasting grand plans to take over the
          world. With the help of Reddit, the site became an instant hit. Within
          two weeks, Dogecoin had established a dedicated blog and forum, and
          its market value has reached US$8 million, once jumping to become the
          seventh largest electronic currency in the world. Dogecoin is based on
          Scrypt algorithm.
        </p>
      </div>
    </div>
  );
};

export default DodgecoinPage;
