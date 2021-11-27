import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";
import Header from "./components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav> </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Header" element={<Header />}></Route>
        <Route exact path="/users/signup" element={<UserSignUp />}></Route>\
        <Route exact path="/users/signin" element={<UserSignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
