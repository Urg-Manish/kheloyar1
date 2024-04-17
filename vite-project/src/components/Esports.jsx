import React from "react";

export default function Esports() {
  return (
    <div className="indian-casino">
      <h2 className="text-white">
        <img
          alt="icon"
          style={{ height: " 22px !important;" }}
          src="https://dqqdyv927mezc.cloudfront.net/kheloyar/landingpagenew/LiveCasinoWebp/esportsSV.svg"
        />{" "}
        Esports{" "}
      </h2>
      <div
        className="d-flex justify-content-end align-content-center see-all"
        tabindex="0"
      >
        <div className="see-all-btn cursor-pointer"> See All </div>
        <div className="ml-1">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
            className="svg-inline--fa fa-arrow-right fa-w-14 iconArrow"
          >
            <path
              fill="currentColor"
              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="item">
          <img className='w-100' src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Esport-Desktop-Images/cod.webp" />
          <div className="game-heading">
            <b>CALL OF DUTY</b>
          </div>
        </div>
        <div className="item">
          <img className='w-100' src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Esport-Desktop-Images/csgo.webp" />
          <div className="game-heading">
            <b>CS-GO</b>
          </div>
        </div>
        <div className="item">
          <img className='w-100' src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Esport-Desktop-Images/dota_2.webp" />
          <div className="game-heading">
            <b>Dota 2</b>
          </div>
        </div>
        <div className="item">
          <img className='w-100' src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Esport-Desktop-Images/league_of_legends.webp" />
          <div className="game-heading">
            <b>League Of Legends</b>
          </div>
        </div>
        <div className="item">
          <img className='w-100' src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Esport-Desktop-Images/rocker_league.webp" />
          <div className="game-heading">
            <b>Rocket League</b>
          </div>
        </div>
      </div>
    </div>
  );
}
