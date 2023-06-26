import React from "react";
import "../css/MainView.css";
import CryptoCards from "./CryptoCards";

function MainView() {
  return (
    <>
      <div id="home" className="title">
        <h1 className="title-first">TRACK AND TRADE</h1>
        <strong>CRYPTO CURRENCIES</strong>
        <CryptoCards />
      </div>
    </>
  );
}

export default MainView;
