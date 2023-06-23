import React from 'react'
import './css/AboutUs.css'
function AboutUs() {
  return (
    <div id="about-us" className='about-us'>
      <h1> Explore endless possibilities with 
      <p className='project-title'>ReactCryptoCoin</p>
      </h1>
    <div className='about-us-columns'>
      <div className='first-column'>
      <p><span class="material-symbols-outlined">apartment</span>
      Dynamically developing company, gaining popularity on the market</p>
      <p><span class="material-symbols-outlined">manage_search</span>
      Discover, collect the right crypto collections to buy or sell.</p>
      <p><span class="material-symbols-outlined">account_balance_wallet</span>
      Invest all your crypto at one place on one platform.</p>
      </div>
      <img className ='crypto-factory' src='https://www.amlexa.com/wp-content/themes/amlexa/assets/img/amlexa-blockchain.svg' alt='Cryppto Factory'></img>
      <div className='second-column'>
      <p><span class="material-symbols-outlined">group</span>
      More than 50,000 users have already trusted us</p>
      <p><span class="material-symbols-outlined">paid</span>
      Earn by selling your crypto on our marketplace.</p>
      <p><span class="material-symbols-outlined">folder_managed</span>
      We make it easy to Discover, Invest and manage.</p>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
