import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import PassiveButton from "../../components/buttons/passiveButton";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

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
      ? "filled-form-button"
      : "empty-form-button";

  // const [isFormFilled, setIsFormFilled] = useState(false);

  // useEffect(() => {
  //   setIsFormFilled(formData.name && formData.email && formData.password);
  // }, [formData]);

  // const buttonClass = useMemo(() => {
  //   return isFormFilled ? "btn-filled" : "btn-empty";
  // }, [isFormFilled]);

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
      <div>
        <h3>Create Your Account</h3>
        <form method="POST" id="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="Name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="Password">Password</label>
          <input
            type={passwordEye === false ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Password"
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

          <button type="submit" className={buttonClass} disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
