import React from 'react'
import './css/MainView.css'
import CryptoCards from './CryptoCards'

function MainView() {
  return (
    <>
    <div className='title'>
    <h1 className='title-first'>TRACK AND TRADE</h1>
    <strong>CRYPTO CURRENCIES</strong>
    </div>
    <CryptoCards />
    </>
  )
}

export default MainView
