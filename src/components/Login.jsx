import React, { useEffect, useState } from "react";
import { useUserLoginMutation } from "../services/jsonServerApi";
import Cookies from "universal-cookie";

const Login = ({ isOpen = false, setIsOpen }) => {
  const [Login, { data, isSuccess }] = useUserLoginMutation();
  const cookies = new Cookies();
  // console.log(cookies.get('myCat')); // Pacman
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    termsAccepted: false,
  });
  useEffect(() => {
    if (isSuccess) cookies.set("token", data?.data?.token);
    console.log(data?.data);
  }, [isSuccess]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login({
      user_name: formData?.username,
      password: formData?.password,
    });
    console.log(formData); // You can replace this with your logic to store the data
    // Close modal after form submission
    setIsOpen(false);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        {isOpen && (
          <div className="modal-body">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="close modal-close-button"
            >
              <svg
                className="svg-inline--fa fa-times fa-w-11"
                aria-hidden="true"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
            <div className="px-4 form-box">
              <div className="text-center header-box d-flex align-items-center justify-content-center">
                {/* <img className="top_light logo-img" src="https://dqqdyv927mezc.cloudfront.net/kheloyar/web/Kheloyar-Logo-for-light-theme.png" alt="" /> */}
                <img
                  className="top_dark logo-img"
                  src="https://dqqdyv927mezc.cloudfront.net/kheloyar/KheloyarnetLogo.svg"
                  alt=""
                />
              </div>
              <form
                noValidate
                className="ng-dirty ng-touched ng-valid"
                data-gtm-form-interact-id="0"
                onSubmit={handleSubmit}
              >
                <div className="pt-3">
                  <label>Username</label>
                  <span className="d-flex align-items-center form-floating">
                    <span className="user_icon">
                      <svg
                        className="svg-inline--fa fa-user fa-w-14"
                        aria-hidden="true"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      autoComplete="username"
                      name="username"
                      id="email"
                      className="text-dark lm form-control ng-dirty ng-valid ng-touched"
                      style={{ height: "43px" }}
                      placeholder="Username"
                      data-gtm-form-interact-field-id="0"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    {/* <label htmlFor="email" className="floating-label">Username</label> */}
                  </span>
                </div>
                <div className="pt-3">
                  <label>Password</label>
                  <div className="inner-addon">
                    <span className="d-flex align-items-center form-floating">
                      <a className="ng-star-inserted">
                        {/* <svg className="svg-inline--fa fa-eye-slash fa-w-20" aria-hidden="true" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                      </svg> */}
                      </a>
                      <span className="user_icon">
                        <svg
                          className="svg-inline--fa fa-key fa-w-16"
                          aria-hidden="true"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176c160.594 0 291.243-130.649 291.841-291.243C451.791-6.59 512 73.893 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                          ></path>
                        </svg>
                      </span>
                      <input
                        name="password"
                        autoComplete="current-password"
                        id="passInput"
                        className="text-dark lm form-control ng-dirty ng-valid ng-touched"
                        style={{ height: "43px" }}
                        placeholder="Password"
                        type="password"
                        data-gtm-form-interact-field-id="1"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {/* <label htmlFor="passInput" className="floating-label">Password</label> */}
                    </span>
                  </div>
                </div>
                <div className="pt-3 input_field_with_logo">
                  <div className="inner-addon">
                    <div className="policy row">
                      <input type="checkbox" className="col-md-1" />
                      <h3 className="col-md-11 text-center">
                        I accept all the{" "}
                        <a
                          
                          style={{ textDecoration: "underline !important" }}
                        >
                          {" "}
                          Terms & Conditions
                        </a>
                      </h3>
                    </div>
                    <p className="loginLink m-0 text-right">
                      <a
                        href="/user/forgot-password"
                        style={{ top: "-2px !important" }}
                      >
                        Forgot Password?
                      </a>
                    </p>
                  </div>
                </div>
                <div className="pt-3">
                  <button type="submit" className="login-btn">
                    {" "}
                    Login{" "}
                  </button>
                </div>
              </form>
              <div className="pt-3 ng-star-inserted">
                <button type="button" className="login-btn">
                  {" "}
                  Login With Demo ID{" "}
                </button>
              </div>
              <p className="loginLink ng-star-inserted">
                <a href="/user/signup">Create New Account</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
