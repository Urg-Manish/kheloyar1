import React from 'react'

export default function AllCasino() {
  return (
    <div className="casinos" id='pad'>
      <h2 className="specialtext">
        <img alt="icon"  height={'25px'} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/WhiteIcons/Casino.svg" /> All Casinos
      </h2>
      <div className="d-flex justify-content-between">
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="teen patti" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/TeenPatti.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="live casino" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/LiveCasino.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="roulette" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/Roulette.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="andar bahar" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/AndarBahar.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="dragon tiger" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/DragonTiger.webp" />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="baccarat" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/Baccarate.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="blackjack" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/BlackJack.webp" />
        </div>
        <div className="item">
          <img className='allcasinoImage' alt="table games" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/TableGames.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="poker" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/Poker.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="hold'em" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/Holdem.webp" />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="instant win" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/InstantWin.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="lottery games" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/LotteryGames.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="power game" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/PowerGame.webp" />
        </div>
        <div className="item" tabIndex="0">
          <img className='allcasinoImage' alt="virtual sports" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/casinosNew/Casino Banner 300x200.webp" />
        </div>
      </div>
    </div>
  )
}

export  function Card({src='https://dqqdyv927mezc.cloudfront.net/kheloyar/web/allcasino/TeenPatti.webp'}) {
  return (
    <img className='rounded rounded-2 mx-1' width={'250px'} height={'167px'} src={src} alt="" />
)
}
