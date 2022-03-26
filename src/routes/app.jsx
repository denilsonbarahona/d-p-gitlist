import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../entities/login/infrastructure/containers/login";
import Profile from "../entities/profile/infrastructure/containers/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
