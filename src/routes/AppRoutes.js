import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import Populargames from "../pages/Populargames";
import Latestgames from "../pages/Latestgames";
import ChatPage from "../pages/ChatPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/populargames" element={<Populargames />} />
      <Route path="/latestgames" element={<Latestgames />} />
      <Route path="/chatpage" element={<ChatPage />} />
    </Routes>
  );
};

export default AppRoutes;
