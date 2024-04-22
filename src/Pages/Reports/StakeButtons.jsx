import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function StakeButtons() {
  return (
    <>
      <div>
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="p-3 rounded" style={{ background: "#0a192f" }}>
            <form action="" className="filter-form justify-content-center g-3 row">
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 1
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"250"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 2
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"200"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 3
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"300"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 4
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"400"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 5
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"500"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 6
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"600"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 7
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"800"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label
                  htmlFor="end-date-account-statement"
                  className="date-label"
                >
                  Button 8
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    defaultValue={"1000"}
                    className="form-control date-input"
                  />
                </div>
              </div>
              <div className="col-md-2 btn-box">
                <button type="submit" formNoValidate="">
                  Update Stake
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
