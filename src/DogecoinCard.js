import React, { useEffect, useState } from 'react';
import './css/Change.css'
import { Link } from 'react-router-dom';

const DogecoinCard = () => {
  const [dogecoinData, setDogecoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=USD'
        );
        const data = await response.json();
        const dogecoin = data.DISPLAY.DOGE.USD;

        setDogecoinData(dogecoin);
      } catch (error) {
        console.log('Something went wrong:', error);
      }
    };

    fetchData();
  }, []);

  if (!dogecoinData) {
    return <div>Loading...</div>;
  }

  const iconUrl = `https://www.cryptocompare.com${dogecoinData.IMAGEURL}`;

  return (
    <Link to='/dogecoin'>
    <div className='dogecoin'>
      <img src={iconUrl} alt={dogecoinData.FROMSYMBOL} />
      <div className='crypto-name'>
      <h2>Dogecoin</h2>
      <p className={ dogecoinData.CHANGEPCT24HOUR > 0 ? 'positive-change' : 'negative-change'}>
      {dogecoinData.CHANGEPCT24HOUR}%
      </p>
      </div>
      <p>{dogecoinData.PRICE}</p>
    </div>
    </Link>
  );
};

export default DogecoinCard;
