import React from "react";
import { Link } from "react-router-dom";
import AccountsTab from "../../components/AccountsTab";
import AccountsNavBar from "../../components/AccountsNavBar";
export default function ActivityLogs() {
  return (
    <>
      <div>
        <AccountsNavBar />
        <div className="container-fluid">
          <AccountsTab />
          <div className="p-3 rounded" style={{ background: "#0a192f" }}>
            <div className="search-table mt-4">
              <div className="table-box no-more-tables">
                <table className="table-borderless w-100">
                  <thead>
                    <tr>
                      <th className="text-left">Login Date & Time</th>
                      <th className="text-left">Login Status</th>
                      <th className="text-left">IP Address</th>
                      <th className="text-left">Device Info</th>
                      <th className="text-left">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-left">4/20/24, 3:20 PM</td>
                      <td class="text-left">SUCCESS</td>
                      <td class="text-left">
                        2409:408a:3e02:ce1c:11a0:1e64:b2d1:2026
                      </td>
                      <td class="text-left">
                        Platform : Android 10 K Chrome Mobile 123.0.0,Timezone :
                        Asia/Calcutta, Country (NOT FOUND)
                      </td>
                      <td class="text-left">https://m.kheloyaar360.net</td>
                    </tr>
                    <tr>
                      <td class="text-left">4/20/24, 3:13 PM</td>
                      <td class="text-left">SUCCESS</td>
                      <td class="text-left">114.31.130.107</td>
                      <td class="text-left">
                        Platform : Android 10 K Chrome Mobile 123.0.0,Timezone :
                        Asia/Calcutta, Country (IN)
                      </td>
                      <td class="text-left">https://m.kheloyaar360.net</td>
                    </tr>
                    <tr>
                      <td class="text-left">4/20/24, 3:11 PM</td>
                      <td class="text-left">SUCCESS</td>
                      <td class="text-left">
                        2001:8f8:1d2e:91ad:a0ee:1e29:aac9:5cb5
                      </td>
                      <td class="text-left">
                        Platform : Windows 10 Other Chrome 123.0.0,Timezone :
                        Asia/Calcutta, Country (NOT FOUND)
                      </td>
                      <td class="text-left">https://kheloyaar360.net</td>
                    </tr>
                    <tr>
                      <td class="text-left">4/20/24, 3:06 PM</td>
                      <td class="text-left">SUCCESS</td>
                      <td class="text-left">2401:4900:47de:6707::63a:137</td>
                      <td class="text-left">
                        Platform : Android 10 K Chrome Mobile 123.0.0,Timezone :
                        Asia/Calcutta, Country (NOT FOUND)
                      </td>
                      <td class="text-left">https://m.kheloyaar360.net</td>
                    </tr>
                    <tr>
                      <td class="text-left">4/20/24, 3:05 PM</td>
                      <td class="text-left">SUCCESS</td>
                      <td class="text-left">94.204.9.105</td>
                      <td class="text-left">
                        Platform : Windows 10 Other Chrome 123.0.0,Timezone :
                        Asia/Calcutta, Country (AE)
                      </td>
                      <td class="text-left">https://kheloyar99.net</td>
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
