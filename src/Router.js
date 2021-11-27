import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";
import Header from "./components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/users/signup" element={<UserSignUp />}></Route>\
        <Route exact path="/users/login" element={<UserSignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
