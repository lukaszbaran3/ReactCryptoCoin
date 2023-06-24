import React, { useState, useEffect } from 'react';
import "./css/CryptoPage.css";

const DodgecoinPage = () => {
  const [dogecoinData, setDogecoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD');
        const data = await response.json();
        setDogecoinData(data);
      } catch (error) {
        console.error('Something went wrong:', error);
      }
    };

    fetchData();
  }, [])

  if (!dogecoinData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='crypto-page'>
      <div className='crypto-data'>
      <img src= 'https://www.cryptocompare.com/media/37746339/doge.png' alt="Dogecoin" />
      <div>Price: ${dogecoinData.RAW.DOGE.USD.PRICE}</div>
      <div>24h Change: {dogecoinData.RAW.DOGE.USD.CHANGEPCT24HOUR}%</div>
      <div>Symbol: DOGE</div>
      </div>
      <p className='crypto-desciption'>Bitcoin is a protocol which implements a public, permanent, and decentralized ledger. In order to add to the ledger, a user must prove they control an entry in the ledger. The protocol specifies that the entry indicates an amount of a token, bitcoin with a minuscule b. The user can update the ledger, assigning some of their bitcoin to another entry in the ledger. Because the token has characteristics of money, it can be thought of as a digital currency.
Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009, when its implementation was released as open-source software..  The word "bitcoin" was defined in a white paper published on October 31, 2008.
The Library of Congress reports that, as of November 2021, nine countries have fully banned bitcoin use, and a further forty-two have implicitly banned it. A few governments have used bitcoin in some capacity. El Salvador has adopted Bitcoin as legal tender. Ukraine has accepted cryptocurrency donations to fund the resistance to the 2022 Russian invasion. Iran has used bitcoin to bypass sanctions.
In 2018, Bitcoin has been described as an economic bubble by at least eight recipients of the Nobel Memorial Prize in Economic Sciences.
The environmental effects of bitcoin are substantial. Its proof-of-work algorithm for bitcoin mining is designed to be computationally difficult, which requires the consumption of increasing quantities of electricity, the generation of which has contributed to climate change. According to the University of Cambridge, bitcoin has emitted an estimated 200 million tonnes of carbon dioxide since its launch, or about 0.04% of all carbon dioxide released since 2009.
      </p>
    </div>
  );
};

export default DodgecoinPage;
