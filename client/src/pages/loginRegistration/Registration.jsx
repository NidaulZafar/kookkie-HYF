import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Registration = () => {
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  return (
    <>
      <Helmet>
        <title>KOOKKIE | Registration</title>
      </Helmet>
      <div>
        <h3>Create Your Account</h3>
        <form method="POST" id="register-form">
          <div className="form_content">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your Name"
                // onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                // onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="asterisk">*</span>
              </label>
              <input
                type={passwordEye === false ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                // onChange={handleChange}
              />
              <div className="AiEye">
                {passwordEye === false ? (
                  <AiFillEyeInvisible onClick={handlePasswordClick} />
                ) : (
                  <AiFillEye onClick={handlePasswordClick} />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
