import React from "react";
import { Link } from "react-router-dom";
export default function AccountsTab() {
  return (
    <>
      <div className="account-tabs py-3">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="dropdown">
            <button className="dropbtn">
              My Bets
              <img
                className="arrow"
                src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.png"
              />
            </button>
            <div className="dropdown-content nav-link">
              <Link to="/reports/casinobets" className="nav-link">
                Casino Bets
              </Link>
              <Link to="/reports/fancybets" className="nav-link">
                Fancy Bets
              </Link>
              <Link to="/reports/sportsbets" className="nav-link">
                Sports Bets
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Reports and Statement
              <img
                className="arrow"
                src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.png"
              />
            </button>
            <div className="dropdown-content nav-link">
              <Link to="/reports/account-statement" className="nav-link">
                Account Statement
              </Link>
              <Link to="/reports/profit-loss" className="nav-link">
                Profit & Loss
              </Link>
              <Link to="/reports/results" className="nav-link">
                Results
              </Link>
              <Link to="/reports/activity-logs" className="nav-link">
                Activity Logs
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Payments
              <img
                className="arrow"
                src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.png"
              />
            </button>
            <div className="dropdown-content nav-link">
              <Link to="/reports/payment/upi-manual" className="nav-link">
                <img
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/cash1.svg"
                  alt=""
                  width={20}
                  className="me-2"
                />
                Deposit
              </Link>
              <Link to="/reports/withdraw" className="nav-link">
                Withdraw
              </Link>
              <Link to="/reports/deposit-history" className="nav-link">
                Deposit/Withdraw Requests History
              </Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              Settings
              <img
                className="arrow"
                src="https://dqqdyv927mezc.cloudfront.net/kheloyar/clientweb/images/arrow.png"
              />
            </button>
            <div className="dropdown-content nav-link">
              <Link to="/change-password" className="nav-link">
                Change Password
              </Link>
              <Link to="/reports/stake-buttons" className="nav-link">
                Stake Buttons
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
