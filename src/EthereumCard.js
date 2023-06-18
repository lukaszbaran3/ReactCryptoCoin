import React, { useEffect, useState } from 'react';
import './css/Change.css'
const EthereumCard = () => {
  const [ethereumData, setEthereumData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD'
        );
        const data = await response.json();
        const ethereum = data.DISPLAY.ETH.USD;

        setEthereumData(ethereum);
      } catch (error) {
        console.log('Error fetching Ethereum data:', error);
      }
    };

    fetchData();
  }, []);

  if (!ethereumData) {
    return <div>Loading...</div>;
  }

  const iconUrl = `https://www.cryptocompare.com${ethereumData.IMAGEURL}`;

  return (
    <div>
      <img src={iconUrl} alt={ethereumData.FROMSYMBOL} />
      <h2>Ethereum</h2>
      <p>{ethereumData.PRICE}</p>
      <p className={ ethereumData.CHANGEPCT24HOUR > 0 ? 'positive-change' : 'negative-change'}>
      {ethereumData.CHANGEPCT24HOUR}%
      </p>
    </div>
  );
};

export default EthereumCard;
