import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Temp from "./components/Temp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/Temp" element={<Temp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
