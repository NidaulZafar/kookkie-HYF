import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import "../../components/buttons/buttons.css";
import "./registration.css";

const Registration = () => {
  const [passwordEye, setPasswordEye] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/user/create",
    onSuccess
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please provide name, email, and password.");
      return;
    }
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const buttonClass =
    formData.name && formData.email && formData.password
      ? "outer filled-form-button"
      : "outer empty-form-button";

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const navigate = useNavigate();

  const onSuccess = () => {
    const userEmail = formData.email;
    navigate("/registrationSuccess", { state: { userEmail } });
  };

  return (
    <>
      <Helmet>
        <title>KOOKKIE | Registration</title>
      </Helmet>
      <div className="main-div">
        <h3>Create Your Account</h3>
        <form method="POST" id="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <div className="eye-holder">
              <input
                type={passwordEye === false ? "password" : "text"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
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
          <button type="submit" className={buttonClass} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
