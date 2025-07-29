import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import Populargames from "../pages/Populargames";
import Latestgames from "../pages/Latestgames";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/populargames" element={<Populargames />} />
      <Route path="/latestgames" element={<Latestgames />} />
    </Routes>
  );
};

export default AppRoutes;
