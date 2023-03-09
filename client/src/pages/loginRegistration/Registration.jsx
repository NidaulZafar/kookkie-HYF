import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import PassiveButton from "../../components/buttons/passiveButton";

const Registration = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [passwordEye, setPasswordEye] = useState(false);

  const handleChange = (e) => {
    user[e.target.id] = e.target.value;
    setUser({ ...user });
  };

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          Name: user.Name,
          Email: user.Email,
          Password: user.Password,
        },
      }),
    });
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
                name="Name"
                id="Name"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type={passwordEye === false ? "password" : "text"}
                name="Password"
                id="Password"
                placeholder="Password"
                onChange={handleChange}
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
          <div className="">
            <PassiveButton handleClick={handleSubmit} title="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
