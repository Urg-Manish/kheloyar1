import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function Results() {
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
                      <th>Competition Name</th>
                      <th>Event Name</th>
                      <th>Market Name</th>
                      <th>Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-left" data-title="Competition Name">
                        South Africa T20 Challenge
                      </td>
                      <td class="text-left" data-title="Event Name">
                        Titans v DP World Lions
                      </td>
                      <td class="text-left" data-title="Market Name">
                        S Makhanya Runs
                      </td>
                      <td class="text-left" data-title="Results">
                        Runner Not Found
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left" data-title="Competition Name">
                        South Africa T20 Challenge
                      </td>
                      <td class="text-left" data-title="Event Name">
                        Titans v DP World Lions
                      </td>
                      <td class="text-left" data-title="Market Name">
                        11 Over TIT
                      </td>
                      <td class="text-left" data-title="Results">
                        Runner Not Found
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left" data-title="Competition Name">
                        South Africa T20 Challenge
                      </td>
                      <td class="text-left" data-title="Event Name">
                        Titans v DP World Lions
                      </td>
                      <td class="text-left" data-title="Market Name">
                        N Brand Runs
                      </td>
                      <td class="text-left" data-title="Results">
                        Runner Not Found
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left" data-title="Competition Name">
                        South Africa T20 Challenge
                      </td>
                      <td class="text-left" data-title="Event Name">
                        Titans v DP World Lions
                      </td>
                      <td class="text-left" data-title="Market Name">
                        11th Over Runs Only TIT
                      </td>
                      <td class="text-left" data-title="Results">
                        Runner Not Found
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left" data-title="Competition Name">
                        South Africa T20 Challenge
                      </td>
                      <td class="text-left" data-title="Event Name">
                        Titans v DP World Lions
                      </td>
                      <td class="text-left" data-title="Market Name">
                        H.M.B Face By S Makhanya
                      </td>
                      <td class="text-left" data-title="Results">
                        Runner Not Found
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left" data-title="Competition Name">
                        South Africa T20 Challenge
                      </td>
                      <td class="text-left" data-title="Event Name">
                        Titans v DP World Lions
                      </td>
                      <td class="text-left" data-title="Market Name">
                        1st 4 WKT TIT
                      </td>
                      <td class="text-left" data-title="Results">
                        Runner Not Found
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
