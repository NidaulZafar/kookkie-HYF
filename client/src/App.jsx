import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Home from "./pages/Home/Home";
import Registration from "./pages/loginRegistration/Registration";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/user/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
