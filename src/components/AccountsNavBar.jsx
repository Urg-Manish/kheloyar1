/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AccountsNavBar() {
  return ( 
    <>
      <nav className="navbar accounts-nav navbar-dark py-1">
        <div className="container-fluid justify-content-between">
          <Link className="navbar-brand py-0 me-1" to="/">
            <img
              src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg"
              width={145}
              alt=""
            />
          </Link>
          <div>
            <Link to="/" className="navbtn rounded">
              Home
            </Link>
            <Link to="/" className="navbtn rounded">
              My Markets
            </Link>
            <Link to="/" className="navbtn rounded">
              In Play
            </Link>
            <Link to="/" className="navbtn rounded">
              Cricket
            </Link>
            <Link to="/" className="navbtn rounded">
              Soccer
            </Link>
            <Link to="/" className="navbtn rounded">
              All Casinos
            </Link>
            <Link to="/" className="navbtn rounded">
              Virtual Sports
            </Link>
            <Link to="/" className="navbtn rounded">
              Teen Patti
            </Link>
            <Link to="/" className="navbtn bg-success rounded">
              <img
                src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/cash1.svg"
                className="me-2"
                width={20}
                alt=""
              />
              Deposit
            </Link>
          </div>
          <div className="d-flex align-items-center">
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
            <div className="dropdown custom-dropdown">
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
        </div>
      </nav>
    </>
  );
}
