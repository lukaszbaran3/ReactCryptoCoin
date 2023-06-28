import React, { useEffect, useState } from "react";
import "../css/CryptoMarket.css";
import "../css/Change.css";
import Pagination from "./Pagination";
import CryptoChart from "./CryptoChart";

const CryptoMarket = () => {
  const [cryptos, setCryptos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [expandedCrypto, setExpandedCrypto] = useState(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&page=${currentPage}&tsym=USD`
        );
        const data = await response.json();
        setCryptos(data.Data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptos();
  }, [currentPage]);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formatNumber = (number) => {
    return parseFloat(number).toFixed(3);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const toggleCryptoChart = (crypto) => {
    if (expandedCrypto === crypto) {
      setExpandedCrypto(null);
    } else {
      setExpandedCrypto(crypto);
    }
  };

  const isCryptoChartExpanded = (crypto) => {
    return expandedCrypto === crypto;
  };

  const sortedCryptos = [...cryptos].sort((a, b) => {
    if (sortColumn === "name") {
      return sortOrder === "asc"
        ? a.CoinInfo.FullName.localeCompare(b.CoinInfo.FullName)
        : b.CoinInfo.FullName.localeCompare(a.CoinInfo.FullName);
    } else if (sortColumn === "symbol") {
      return sortOrder === "asc"
        ? a.CoinInfo.Name.localeCompare(b.CoinInfo.Name)
        : b.CoinInfo.Name.localeCompare(a.CoinInfo.Name);
    } else if (sortColumn === "price") {
      return sortOrder === "asc"
        ? a.RAW.USD.PRICE - b.RAW.USD.PRICE
        : b.RAW.USD.PRICE - a.RAW.USD.PRICE;
    } else if (sortColumn === "marketCap") {
      return sortOrder === "asc"
        ? a.RAW.USD.MKTCAP - b.RAW.USD.MKTCAP
        : b.RAW.USD.MKTCAP - a.RAW.USD.MKTCAP;
    } else if (sortColumn === "change") {
      return sortOrder === "asc"
        ? a.RAW.USD.CHANGEPCT24HOUR - b.RAW.USD.CHANGEPCT24HOUR
        : b.RAW.USD.CHANGEPCT24HOUR - a.RAW.USD.CHANGEPCT24HOUR;
    }
    return 0;
  });

  return (
    <div id="market" className="crypto-info-container">
      <h1 className="crypto-info-title">Crypto Market Update</h1>
      <table className="crypto-info-table">
        <thead>
          <tr className="table-titles">
            <th className="title-icon">Icon</th>
            <th>
              <button
                className="crypto-info-button"
                onClick={() => handleSort("name")}
              >
                Name {sortColumn === "name" && sortOrder === "asc" && "▲"}
                {sortColumn === "name" && sortOrder === "desc" && "▼"}
              </button>
            </th>
            <th>
              <button
                className="crypto-info-button"
                onClick={() => handleSort("symbol")}
              >
                Symbol {sortColumn === "symbol" && sortOrder === "asc" && "▲"}
                {sortColumn === "symbol" && sortOrder === "desc" && "▼"}
              </button>
            </th>
            <th>
              <button
                className="crypto-info-button"
                onClick={() => handleSort("price")}
              >
                Price (USD){" "}
                {sortColumn === "price" && sortOrder === "asc" && "▲"}
                {sortColumn === "price" && sortOrder === "desc" && "▼"}
              </button>
            </th>
            <th>
              <button
                className="crypto-info-button"
                onClick={() => handleSort("change")}
              >
                24h Change (%){" "}
                {sortColumn === "change" && sortOrder === "asc" && "▲"}
                {sortColumn === "change" && sortOrder === "desc" && "▼"}
              </button>
            </th>
            <th>
              <button
                className="crypto-info-button"
                onClick={() => handleSort("marketCap")}
              >
                Market Cap (USD){" "}
                {sortColumn === "marketCap" && sortOrder === "asc" && "▲"}
                {sortColumn === "marketCap" && sortOrder === "desc" && "▼"}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCryptos.map((crypto) => (
            <React.Fragment key={crypto.CoinInfo.Id}>
              <tr onClick={() => toggleCryptoChart(crypto)}>
                <td>
                  <img
                    src={`https://cryptocompare.com${crypto.CoinInfo.ImageUrl}`}
                    alt={crypto.CoinInfo.Name}
                    className="crypto-img"
                  />
                </td>
                <td>{crypto.CoinInfo.FullName}</td>
                <td>{crypto.CoinInfo.Name}</td>
                <td>{formatNumber(crypto.RAW.USD.PRICE)}</td>
                <td
                  className={
                    crypto.RAW.USD.CHANGEPCT24HOUR > 0
                      ? "positive-change"
                      : "negative-change"
                  }
                >
                  {formatNumber(crypto.RAW.USD.CHANGEPCT24HOUR)}
                </td>
                <td>{formatNumber(crypto.RAW.USD.MKTCAP)}</td>
              </tr>
              {isCryptoChartExpanded(crypto) && (
                <tr>
                  <td className="expanded-chart" colSpan="6">
                    <CryptoChart coinId={crypto.CoinInfo.FullName} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default CryptoMarket;
