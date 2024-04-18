import React, { useEffect, useState } from "react";
import { useGetEventsQuery, useGetseiresMatchsListMutation } from "../services/jsonServerApi";
import { Link } from "react-router-dom";
let casinoList = [
  "Roulette",
  "Live Casino",
  "Teen Patti",
  "Andar Bahar",
  "Dragon Tiger",
  "Baccarat",
  "Black Jack",
  "Table Games",
];
let eventTypes=[
  {
    "id": "4",
    "name": "Cricket",
    "childNode": "getcompetition/4",
    "detail": "sportsbyid/4"
  },
  {
    "id": "1",
    "name": "Soccer",
    "childNode": "getcompetition/1",
    "detail": "sportsbyid/1"
  },
  {
    "id": "2",
    "name": "Tennis",
    "childNode": "getcompetition/2",
    "detail": "sportsbyid/2"
  },
  {
    "id": "7",
    "name": "Horse Racing",
    "childNode": "getcountries/7",
    "detail": "raceschedule/7/ALL"
  },
  {
    "id": "13",
    "name": "Horse Race Todays Card",
    "childNode": "todayraces/7",
    "detail": "raceschedule/7/today"
  },
  {
    "id": "4339",
    "name": "Greyhound Racing",
    "childNode": "getcountries/4339",
    "detail": "raceschedule/4339/ALL"
  },
  {
    "id": "15",
    "name": "Greyhound Todays Card",
    "childNode": "todayraces/4339",
    "detail": "raceschedule/4339/today"
  },
  {
    "id": "6423",
    "name": "American Football",
    "childNode": "getcompetition/6423",
    "detail": "sportsbyid/6423"
  }
]
function Sidebar() {
  const { data } = useGetEventsQuery();
  const [active, setActive] = useState();
  const [getMatches, { data:matchData }] = useGetseiresMatchsListMutation();
  useEffect(() => {
    getMatches({
      limit: 50,
      pageno: 1,
      series_id: 0,
      sport_id:4 ,
      type: "home",
    });
  }, []);
  useEffect(() => {
    console.log({ matchData });
  }, [matchData]);
  return (
    <nav id="sidebar" className="collapse show">
      <div className="sidebar-header">
        <a
          className="d-flex align-items-center"
          style={{ textDecoration: "unset" }}
          href="/home"
        >
          {/* <img alt="" className="top_light" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Kheloyar-Logo-for-light-theme.png" /> */}
          <img
            alt=""
            className="top_dark "
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg"
          />
        </a>
      </div>
      <div id="serachx" className="search-box">
        <div className="search">
          <input
            type="text"
            placeholder="Search Market.."
            id="list"
            autoComplete="off"
            className="search-txt ng-untouched ng-pristine ng-valid"
          />
        </div>
        <div className="list-cont">
          <div className="list-sugg"></div>
        </div>
      </div>
      <ul id="sidebar-links" className="sidebar-links sidebar-list components">
        {/* Popular Sports */}
        <div
          onClick={() => (active == 1 ? setActive(0) : setActive(1))}
          className="d-flex align-items-center justify-content-between market-border chamak1"
          style={{ position: "relative" }}
        >
          <label
            className="mb-1"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <img
              alt=""
              style={{ height: "21px !important", marginTop: "5px" }}
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/icons-color/fire.svg"
            />
            <span className="special-list"> Popular Sports </span>
          </label>
          <img
            className="arrow mt-0"
            style={{ transform: active !== 1 && "rotate(90deg)" }}
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg"
          />
        </div>
        {/* Sports and events */}
        <div className="casinoesLink">
          {/* List of sports and events */}
          {active == 1 &&
            popularEventTypes?.map((i, index) => (
              
              <div className="market-border" tabIndex="0" key={index}>
              
                <span className="sports-icon-grey sports4"></span>
                <span> {i?.eventName} </span>
              </div>
            ))}

          {/* Add more events here */}
        </div>
        {/* All Casinos */}
        <div
          onClick={() => (active == 2 ? setActive(0) : setActive(2))}
          className="d-flex align-items-center justify-content-between market-border chamak1"
          style={{ position: "relative" }}
        >
          <label
            className="mb-1"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <img
              alt=""
              className="spinnerImg"
              style={{ height: "21px !important", marginTop: "5px" }}
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/icons-color/casino.png"
            />
            <span className="special-list">All Casinos</span>
          </label>
          <img
            className="arrow mt-0"
            style={{ transform: active !== 2 && "rotate(90deg)" }}
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg"
          />
        </div>
        <div className="casinoesLink">
          {/* List of sports and events */}
          {active == 2 &&
            casinoList?.map((i, index) => (
              <div className="market-border" tabIndex="0" key={index}>
                <span className="sports-icon-grey sports4"></span>
                <span> {i} </span>
              </div>
            ))}

          {/* Add more events here */}
        </div>
        {/* Virtual Sports */}
        <div
          className="d-flex align-items-center justify-content-between market-border chamak1"
          style={{ position: "relative" }}
        >
          <label
            className="mb-1"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <img
              alt=""
              style={{ height: "21px !important", marginTop: "5px" }}
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/vsport.png"
            />
            <span className="special-list"> Virtual Sports </span>
          </label>
          <img
            className="arrow mt-0"
            style={{ transform: "rotate(90deg)" }}
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg"
          />
        </div>
        {/* Sports */}
        <div
          className="d-flex align-items-center justify-content-between market-border chamak1 cursor "
          style={{ position: "relative", height: "32px" }}
          tabIndex="0"
          
        >
          <Link to={`/sports`}>

          <label 
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              cursor:'pointer'
            }}
            >
            <span className="sports-icon-sports sportsSpecial"></span>
            <span className="special-list"> Sports </span>
          </label>
            </Link>
          <img
            className="arrow mt-0"
            style={{ transform: "rotate(90deg)" }}
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg"
          />
        </div>
        {/* List of sports */}
     {   eventTypes?.map((i,index)=>(
        <li key={index} >
          <Link  className="cursor" to={`/sports/sportsbyid/${i?.id}`}>

        <div className="d-flex align-items-center justify-content-between market-border">
          <label data="a" htmlFor="4" className="item cursor">
            <span className={"sports-icon-grey sports"+i?.id}></span>
            <span className="first-level ">{i?.name}</span>
          </label>
          <img
            className="arrow mt-0"
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.svg"
            />
        </div>
        <ul data-check="1" id="list-1" className="list-1 sidebar-links"></ul>
            </Link>
      </li>      
            ))}
        
        {/* Add more sports here */}
      </ul>
    </nav>
  );
}

export default Sidebar;
let popularEventTypes = [
  {
    id: "4",
    eventName: "Gujarat Titans v Delhi Capitals",
    marketId: "1.227411685",
    link: "sports/cricket/1.227411685",
  },
  {
    id: "4",
    eventName: "Punjab Kings v Mumbai Indians",
    marketId: "1.227446331",
    link: "sports/cricket/1.227446331",
  },
  {
    id: "4",
    eventName: "Lucknow Super Giants v Chennai Super Kings",
    marketId: "1.227598546",
    link: "sports/cricket/1.227598546",
  },
  {
    id: "4",
    eventName: "Pakistan v New Zealand",
    marketId: "1.227707487",
    link: "sports/cricket/1.227707487",
  },
  {
    id: "1",
    eventName: "Man City v Chelsea",
    marketId: "1.226309223",
    link: "sports/marketdetail/1.226309223",
  },
  {
    id: "1",
    eventName: "Bayern Munich v Arsenal",
    marketId: "1.227394502",
    link: "sports/marketdetail/1.227394502",
  },
  {
    id: "1",
    eventName: "Man City v Real Madrid",
    marketId: "1.227394361",
    link: "sports/marketdetail/1.227394361",
  },
  {
    id: "2",
    eventName: "Andrea Vavassori v Roberto Bautista Agut",
    marketId: "1.227720234",
    link: "sports/marketdetail/1.227720234",
  },
  {
    id: "2",
    eventName: "Alexandre Muller v Casper Ruud",
    marketId: "1.227688975",
    link: "sports/marketdetail/1.227688975",
  },
  {
    id: "2",
    eventName: "Jordan Thompson v Jaume Munar",
    marketId: "1.227719945",
    link: "sports/marketdetail/1.227719945",
  },
  {
    id: "2",
    eventName: "Marco Trungelliti v Nicolas Jarry",
    marketId: "1.227676152",
    link: "sports/marketdetail/1.227676152",
  },
  {
    id: "2",
    eventName: "Dusan Lajovic v Ugo Humbert",
    marketId: "1.227720147",
    link: "sports/marketdetail/1.227720147",
  },
  {
    id: "2",
    eventName: "Lorenzo Musetti v Roberto Carballes Baena",
    marketId: "1.227719860",
    link: "sports/marketdetail/1.227719860",
  },
  {
    id: "2",
    eventName: "Daniel Altmaier v Arthur Fils",
    marketId: "1.227722348",
    link: "sports/marketdetail/1.227722348",
  },
  {
    id: "2",
    eventName: "Fabian Marozsan v Luca Van Assche",
    marketId: "1.227720041",
    link: "sports/marketdetail/1.227720041",
  },
  {
    id: "2",
    eventName: "Alex De Minaur v Rafael Nadal",
    marketId: "1.227722263",
    link: "sports/marketdetail/1.227722263",
  },
];
