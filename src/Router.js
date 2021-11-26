import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav> </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/users/signup" element={<UserSignUp />}></Route>\
        <Route exact path="/users/signin" element={<UserSignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
