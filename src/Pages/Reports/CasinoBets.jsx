import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function CasinoBets() {
  return (
    <>
      <div>
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="p-3 rounded" style={{ background: "#0a192f" }}>
            <form action="" className="filter-form g-3 row">
              <div className="col-md-5">
                <label className="date-label">Filter Type</label>
                <div className="input-group">
                  <select className="form-control form-select text-uppercase">
                    <option value="0: SETTLED">SETTLED</option>
                    <option value="1: CANCELLED">CANCELLED</option>
                    <option value="2: OPENED">OPENED</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Date
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
                      <th className="text-center">Game Code</th>
                      <th className="text-center">Game Name</th>
                      <th className="text-center">Round Id</th>
                      <th className="text-center">Runner Name</th>
                      <th className="text-center">Side</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Size</th>
                      <th className="text-center">Placed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">Game Code</td>
                      <td className="text-center">Game Name</td>
                      <td className="text-center">Round Id</td>
                      <td className="text-center">Runner Name</td>
                      <td className="text-center">Side</td>
                      <td className="text-center">Price</td>
                      <td className="text-center">Size</td>
                      <td className="text-center">Placed Date</td>
                    </tr>
                    <tr>
                      <td className="text-center">Game Code</td>
                      <td className="text-center">Game Name</td>
                      <td className="text-center">Round Id</td>
                      <td className="text-center">Runner Name</td>
                      <td className="text-center">Side</td>
                      <td className="text-center">Price</td>
                      <td className="text-center">Size</td>
                      <td className="text-center">Placed Date</td>
                    </tr>
                    <tr>
                      <td className="text-center">Game Code</td>
                      <td className="text-center">Game Name</td>
                      <td className="text-center">Round Id</td>
                      <td className="text-center">Runner Name</td>
                      <td className="text-center">Side</td>
                      <td className="text-center">Price</td>
                      <td className="text-center">Size</td>
                      <td className="text-center">Placed Date</td>
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
