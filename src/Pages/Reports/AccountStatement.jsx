import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function AccountStatement() {
  return (
    <>
      <div>
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="p-3 rounded" style={{ background: "#0a192f" }}>
            <form action="" className="filter-form g-3 row">
              <div className="col-md-5">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Start Date
                </label>
                <div className="input-group">
                  <input
                    type="datetime-local"
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  End Date
                </label>
                <div className="input-group">
                  <input
                    type="datetime-local"
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-2 btn-box">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  &nbsp;
                </label>
                <button type="submit" formNoValidate="">
                  Load Report
                </button>
              </div>
            </form>

            <div className="search-table mt-4">
              <div className="table-box no-more-tables">
                <table className="table-borderless w-100">
                  <thead>
                    <tr>
                      <th className="text-center">Voucher ID </th>
                      <th className="text-center">Market ID</th>
                      <th className="text-center">Settled Date</th>
                      <th className="text-center">Narration</th>
                      <th className="text-center">Debit</th>
                      <th className="text-center">Credit</th>
                      <th className="text-center">Running Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">0</td>
                      <td className="text-center">N.A.</td>
                      <td className="text-center">4/14/24, 3:03 PM</td>
                      <td className="text-center">OPENING BALANCE</td>
                      <td className="text-center">
                        <span className="text-danger">0.0000</span>
                      </td>
                      <td className="text-center">
                        <span style={{ color: "green" }}>0.0340</span>
                      </td>
                      <td className="text-center">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">0</td>
                      <td className="text-center">N.A.</td>
                      <td className="text-center">4/14/24, 3:03 PM</td>
                      <td className="text-center">OPENING BALANCE</td>
                      <td className="text-center">
                        <span className="text-danger">0.0000</span>
                      </td>
                      <td className="text-center">
                        <span style={{ color: "green" }}>0.0340</span>
                      </td>
                      <td className="text-center">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">0</td>
                      <td className="text-center">N.A.</td>
                      <td className="text-center">4/14/24, 3:03 PM</td>
                      <td className="text-center">OPENING BALANCE</td>
                      <td className="text-center">
                        <span className="text-danger">0.0000</span>
                      </td>
                      <td className="text-center">
                        <span style={{ color: "green" }}>0.0340</span>
                      </td>
                      <td className="text-center">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <div className="text-center pb-2">
                  <b>No Data Found.</b>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
