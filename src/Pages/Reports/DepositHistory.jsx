import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function StakeButtons() {
  return (
    <>
      <div className="d-history">
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="border" style={{ background: "#0a192f" }}>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item w-50" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-Withdrawal-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Withdrawal"
                  type="button"
                  role="tab"
                  aria-controls="pills-Withdrawal"
                  aria-selected="true"
                >
                  Withdrawal Requests
                </button>
              </li>
              <li className="nav-item w-50" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Deposit-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Deposit"
                  type="button"
                  role="tab"
                  aria-controls="pills-Deposit"
                  aria-selected="false"
                >
                  Deposit Requests
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-Withdrawal"
                role="tabpanel"
                aria-labelledby="pills-Withdrawal-tab"
                tabindex="0"
              >
                <div className="search-table mt-4">
                  <div className="table-box no-more-tables">
                    <table className="table-borderless w-100">
                      <thead>
                        <tr>
                          <th className="text-left">Requested Amount</th>
                          <th className="text-left">Requested Time</th>
                          <th className="text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                    <div className="text-center py-2">
                      <small>
                        <b>No Data Found.</b>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Deposit"
                role="tabpanel"
                aria-labelledby="pills-Deposit-tab"
                tabindex="0"
              >
                <div className="search-table mt-4">
                  <div className="table-box no-more-tables">
                    <table className="table-borderless w-100">
                      <thead>
                        <tr>
                          <th className="text-left">Amount</th>
                          <th className="text-left">Upload Date</th>
                          <th className="text-left">Verified</th>
                          <th className="text-left" width="80">
                            File
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                    <div className="text-center py-2">
                      <small>
                        <b>No Data Found.</b>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
