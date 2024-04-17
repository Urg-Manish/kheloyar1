import React, { useEffect } from 'react';
import { useGetEventsQuery } from '../services/jsonServerApi';

function Sidebar() {
    const{data}= useGetEventsQuery()
    useEffect(()=>{
console.log({data})
    },[data])
  return (
    <nav id="sidebar" className="collapse show">
      <div className="sidebar-header">
        <a  className="d-flex align-items-center" style={{ textDecoration: 'unset' }} href="/home">
          {/* <img alt="" className="top_light" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Kheloyar-Logo-for-light-theme.png" /> */}
          <img alt="" className="top_dark " src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg" />
        </a>
      </div>
      <div id="serachx" className="search-box">
        <div className="search">
          <input type="text" placeholder="Search Market.." id="list" autoComplete="off" className="search-txt ng-untouched ng-pristine ng-valid" />
        </div>
        <div className="list-cont">
          <div className="list-sugg"></div>
        </div>
      </div>
      <ul id="sidebar-links" className="sidebar-links sidebar-list components">
        {/* Popular Sports */}
        <div className="d-flex align-items-center justify-content-between market-border chamak1" style={{ position: 'relative' }}>
          <label className="mb-1" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img alt="" style={{ height: '21px !important', marginTop: '5px' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/icons-color/fire.svg" />
            <span className="special-list"> Popular Sports </span>
          </label>
          <img className="arrow mt-0" style={{ transform: 'rotate(90deg)' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg" />
        </div>
        {/* Sports and events */}
        <div className="casinoesLink">
          {/* List of sports and events */}
          <div className="market-border" tabIndex="0">
            <span className="sports-icon-grey sports4"></span>
            <span> Gujarat Titans v Delhi Capitals </span>
          </div>
          {/* Add more events here */}
        </div>
        {/* All Casinos */}
        <div className="d-flex align-items-center justify-content-between market-border chamak1" style={{ position: 'relative' }}>
          <label className="mb-1" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img alt="" className="spinnerImg" style={{ height: '21px !important', marginTop: '5px' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/icons-color/casino.png" />
            <span className="special-list">All Casinos</span>
          </label>
          <img className="arrow mt-0" style={{ transform: 'rotate(0deg)' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg" />
        </div>
        {/* Virtual Sports */}
        <div className="d-flex align-items-center justify-content-between market-border chamak1" style={{ position: 'relative' }}>
          <label className="mb-1" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img alt="" style={{ height: '21px !important', marginTop: '5px' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/vsport.png" />
            <span className="special-list"> Virtual Sports </span>
          </label>
          <img className="arrow mt-0" style={{ transform: 'rotate(90deg)' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg" />
        </div>
        {/* Sports */}
        <div className="d-flex align-items-center justify-content-between market-border chamak1" style={{ position: 'relative', height: '32px' }} tabIndex="0">
          <label style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <span className="sports-icon-sports sportsSpecial"></span>
            <span className="special-list"> Sports </span>
          </label>
          <img className="arrow mt-0" style={{ transform: 'rotate(90deg)' }} src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg" />
        </div>
        {/* List of sports */}
        <li>
          <div className="d-flex align-items-center justify-content-between market-border">
            <label data="a" htmlFor="4" className="item">
              <span className="sports-icon-grey sports4"></span>
              <span className="first-level">Cricket</span>
            </label>
            <img className="arrow mt-0" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg" />
          </div>
          <ul data-check="1" id="list-1" className="list-1 sidebar-links"></ul>
        </li>
        {/* Add more sports here */}
      </ul>
    </nav>
  );
}

export default Sidebar;
