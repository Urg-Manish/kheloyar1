import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function ProfitLoss() {
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
                <div className="text-center py-2">
                  <small className="text-white">
                    <b>No Data Found.</b>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
