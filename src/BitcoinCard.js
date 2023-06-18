import React, { useEffect, useState } from 'react';
import './css/BitcoinCard.css';
import './css/Change.css';
import { Link } from 'react-router-dom';

const BitcoinCard = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD'
        );
        const data = await response.json();
        const bitcoin = data.DISPLAY.BTC.USD;

        setBitcoinData(bitcoin);
      } catch (error) {
        console.log('Error fetching Bitcoin data:', error);
      }
    };

    fetchData();
  }, []);

  if (!bitcoinData) {
    return <div>Loading...</div>;
  }

  const iconUrl = `https://www.cryptocompare.com${bitcoinData.IMAGEURL}`;

  return (
    <div className='bitcoin'>
      <img src={iconUrl} alt={bitcoinData.FROMSYMBOL} />
      <h2>Bitcoin</h2>
      <p>{bitcoinData.PRICE}</p>
      <p className={ bitcoinData.CHANGEPCT24HOUR > 0 ? 'positive-change' : 'negative-change'} >
      {bitcoinData.CHANGEPCT24HOUR}%
      </p>
      <Link to='/bitcoin'></Link>
    </div>
  );
};

export default BitcoinCard;
