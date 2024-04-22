import React from "react";
import { Link } from "react-router-dom";
// Importing the JSON data
import menu from "../services/AllSports.json";
export default function Topbar() {
  const navMenus = menu.navMenus;
  return (
    <>
      <div className="c-top-bar">
        <div className="logo-section">
          <Link to="/">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg"
              width={130}
              alt=""
            />
          </Link>
        </div>
        <div className="menu-links">
          {navMenus.map((menuItem) => (
            <Link key={menuItem.id} to={menuItem.link} className="nav-link">
              <img src={menuItem.image} alt="" />
              <span>{menuItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="refresh-count">
          <img
            alt=""
            src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/casino-refresh.svg"
          />
        </div>
        <div className="bal-liab">
          <div className="bal">
            <img
              width={15}
              alt=""
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/casinoV4/cash.svg"
            />
            <span>BAL: 0.03</span>
          </div>
          <div className="bal">
            <img
              width={15}
              alt=""
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/casinoV4/loss.svg"
            />
            <span>LIAB: 0.00</span>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn border-0 dropdown-toggle px-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/cog2.svg"
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/withdraw.png"
                  alt=""
                />
                Withdraw
              </Link>
            </li>
            <li>
              <Link to="/account-statement" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/account-statement.svg"
                  alt=""
                />
                Account Statement
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/mybets.svg"
                  alt=""
                />
                My Bets
              </Link>
            </li>
            <li>
              <Link to="/settings" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/p&l.svg"
                  alt=""
                />
                Profit & Loss
              </Link>
            </li>
            <li>
              <Link to="/change-password" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/change-password.svg"
                  alt=""
                />
                Change Password
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/activity-log.svg"
                  alt=""
                />
                Activity Log
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/nav-drop-icons/logout.svg"
                  alt=""
                />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dark-top hidenShow">
        <ul className="topmenubar">
          <li >
            <Link to="/sports" className="add-color">
              Exchange
            </Link>
          </li>
          <li>
            <Link to="/all-sports" className="add-color">
              Sports Book
            </Link>
          </li>
          <li>
            <Link to="/casinos/games/roulette" className="casino-blink">
              Casino
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
