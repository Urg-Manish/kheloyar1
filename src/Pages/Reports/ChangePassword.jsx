import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function ChangePassword() {
  return (
    <>
      <div>
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="p-3 rounded">
            <form
              action=""
              className="filter-form flex-column align-items-center justify-content-center g-3 row"
            >
              <h3 className="text-center text-white mb-2">Change Passoword</h3>
              <div
                className="col-md-4 p-4"
                style={{ background: "#01030a", borderRadius: "10px" }}
              >
                <div className="row">
                  <div className="col-md-12 mt-0">
                    <label
                      htmlFor="end-date-account-statement"
                      className="date-label"
                    >
                      Current Password
                    </label>
                    <div class="input-group mb-3 ps-0 py-0">
                      <span
                        class="input-group-text border-0"
                        style={{ background: "#0c1c37" }}
                        id="basic-addon1"
                      >
                        <i className="bi bi-key-fill text-white"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Current Password"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-0">
                    <label
                      htmlFor="end-date-account-statement"
                      className="date-label"
                    >
                      New Password
                    </label>
                    <div class="input-group mb-3 ps-0 py-0">
                      <span
                        class="input-group-text border-0"
                        style={{ background: "#0c1c37" }}
                        id="basic-addon1"
                      >
                        <i className="bi bi-key-fill text-white"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="New Password"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-0">
                    <label
                      htmlFor="end-date-account-statement"
                      className="date-label"
                    >
                      Confirm password
                    </label>
                    <div class="input-group mb-3 ps-0 py-0">
                      <span
                        class="input-group-text border-0"
                        style={{ background: "#0c1c37" }}
                        id="basic-addon1"
                      >
                        <i className="bi bi-key-fill text-white"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Confirm password"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 btn-box">
                    <button type="submit" formNoValidate="">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
