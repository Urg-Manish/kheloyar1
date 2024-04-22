import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function Withdraw() {
  return (
    <>
      <div>
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="p-3 rounded" style={{ background: "#020c1b" }}>
            <div className="container withdraw">
              <h3 className="text-center text-white mt-3">Withdraw Request</h3>
              <ul className="text-white">
                <li>
                  The bonus amount can be used to place bets across the platform
                  and the winnings can be withdrawn.
                </li>
                <li>
                  A player can use bonus amount to place bets and play games on
                  Kheloyar.
                </li>
                <li>
                  If the withdrawals are pending from the bank, it may take upto
                  72 banking hours for your transaction to clear.
                </li>
                <li>
                  If a user only deposits and attempts to withdraw the money
                  without placing a single bet, 100% of the amount will be
                  withheld due to suspicious activity. If this is repeated, no
                  withdrawal will be given to the user.
                </li>
              </ul>
              <ul
                class="nav nav-pills justify-content-center mt-5"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-AddAccount-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-AddAccount"
                    type="button"
                    role="tab"
                    aria-controls="pills-AddAccount"
                    aria-selected="true"
                  >
                    Add Account
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-ExistingAccount-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ExistingAccount"
                    type="button"
                    role="tab"
                    aria-controls="pills-ExistingAccount"
                    aria-selected="false"
                  >
                    Existing Account
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-AddAccount"
                  role="tabpanel"
                  aria-labelledby="pills-AddAccount-tab"
                  tabindex="0"
                >
                  <form className="p-4 filter-form">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="p-0" htmlFor="PaymentOption">
                          Payment Options
                        </label>
                        <div className="input-group mb-3">
                          <select
                            id="PaymentOption"
                            className="form-control form-select"
                          >
                            <option value="0: Bank">Bank</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="p-0" htmlFor="holdername">
                          Holder Name
                        </label>
                        <div className="input-group mb-3">
                          <input
                            id="holdername"
                            type="text"
                            className="form-control"
                            placeholder="Holder Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="row m-0">
                          <div className="col-md-9 col-sm-8 ps-0">
                            <label className="p-0" htmlFor="bankname">
                              Bank Name
                            </label>
                            <div className="input-group mb-3">
                              <input
                                id="bankname"
                                type="text"
                                className="form-control"
                                placeholder="Bank Name"
                                maxlength="{20}"
                              />
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-4 pe-0">
                            <label className="p-0" htmlFor="branchName">
                              Branch
                            </label>
                            <div className="input-group mb-3">
                              <input
                                id="branchName"
                                type="text"
                                className="form-control"
                                placeholder="Branch Name"
                                maxlength="{20}"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="p-0" htmlFor="accountNo">
                          Account No
                        </label>
                        <div className="input-group mb-3">
                          <input
                            id="accountNo"
                            type="number"
                            className="form-control"
                            placeholder="Account No"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="p-0" htmlFor="ibnifsccode">
                          IBAN/IFSC Number
                        </label>
                        <div className="input-group mb-3">
                          <input
                            id="ibnifsccode"
                            type="text"
                            className="form-control"
                            placeholder="IBAN/IFSC Number"
                          />
                        </div>
                      </div>
                      <div className="add-account-btn mt-2">
                        <div className="d-flex m-auto w-50">
                          <button
                            type="submit"
                            className="btn submit-btn w-100"
                            disabled=""
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="search-table mt-4">
                    <div className="table-box no-more-tables">
                      <table className="table-borderless w-100">
                        <thead>
                          <tr>
                            <th className="text-center">Account Number</th>
                            <th className="text-center">Account Holder Name</th>
                            <th className="text-center">IBAN/IFSC Number</th>
                            <th className="text-center">Bank Name</th>
                            <th className="text-center">Branch Name</th>
                            <th className="text-center">Payment Option</th>
                            <th className="text-center">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">3346013685</td>
                            <td className="text-center">Atarsingh</td>
                            <td className="text-center">CBIN0281231</td>
                            <td className="text-center">Central</td>
                            <td className="text-center">Lahar</td>
                            <td className="text-center">Bank</td>
                            <td className="text-center">
                              <span class="badge text-bg-dark bg-dark cursor-pointer">
                                Dark
                              </span>
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
                <div
                  class="tab-pane fade"
                  id="pills-ExistingAccount"
                  role="tabpanel"
                  aria-labelledby="pills-ExistingAccount-tab"
                  tabindex="0"
                >
                  <form className="p-4 filter-form">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="p-0" htmlFor="anumber">
                          Account Number
                        </label>
                        <div className="input-group mb-3">
                          <input
                            id="anumber"
                            type="text"
                            className="form-control"
                            readOnly
                            placeholder="Account Number"
                            defaultValue={"3346013685"}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <label className="p-0" htmlFor="aname">
                          Account Namer
                        </label>
                        <div className="input-group mb-3">
                          <input
                            id="aname"
                            type="text"
                            className="form-control"
                            readOnly
                            placeholder="Account Namer"
                            defaultValue={"Atarsingh"}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="p-0" htmlFor="accountNo">
                          Amount
                        </label>
                        <div className="input-group mb-3">
                          <input
                            id="accountNo"
                            type="number"
                            className="form-control"
                            placeholder="Account No"
                            defaultValue={"500"}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="withDrawButtons d-flex gap-3 mb-3">
                          <button
                            type="button"
                            className="btn submit-btn activeAmount"
                          >
                            500
                          </button>
                          <button type="button" className="btn btn-outline">
                            5000
                          </button>
                          <button type="button" className="btn btn-outline">
                            100000
                          </button>
                          <button type="button" className="btn btn-outline">
                            200000
                          </button>
                          <button type="button" className="btn btn-outline">
                            500000
                          </button>
                          <button type="button" className="btn btn-outline">
                            1000000
                          </button>
                        </div>
                      </div>
                      <div className="add-account-btn mt-2">
                        <div className="d-flex m-auto w-50">
                          <button
                            type="submit"
                            className="btn submit-btn w-100"
                            disabled=""
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="search-table mt-4">
                    <div className="table-box no-more-tables">
                      <table className="table-borderless w-100">
                        <thead>
                          <tr>
                            <th className="text-center">Transaction No</th>
                            <th className="text-center">Account Number</th>
                            <th className="text-center">Amount</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Date & Time</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
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
