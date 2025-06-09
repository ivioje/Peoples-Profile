// Route definitions
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profiles from "../pages/Profiles";
import Templates from "../pages/Templates";
import Guide from "../pages/Guide";
import ProfileView from "../pages/ProfileView";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard/*" element={<Dashboard />} />
    <Route path="/profiles" element={<Profiles />} />
    <Route path="/templates" element={<Templates />} />
    <Route path="/guide" element={<Guide />} />
    <Route path="/profile/:profileSlug" element={<ProfileView />} />
  </Routes>
);

export default AppRoutes;
