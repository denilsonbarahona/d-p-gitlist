import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../entities/login/infrastructure/containers/login";
import Profile from "../entities/profile/infrastructure/containers/profile";

const Private = ({ children }) => {
  const { user } = useSelector((state) => state.LoginReducer);
  if (user.login) {
    return children;
  }
  return <Navigate to="/" />;
};

const IsLogged = ({ children }) => {
  const { user } = useSelector((state) => state.LoginReducer);
  if (user.login) {
    return <Navigate to={`/${user.login}`} />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <IsLogged>
              <Login />
            </IsLogged>
          }
        />
        <Route
          path="/:profile"
          element={
            <Private>
              <Profile />
            </Private>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
