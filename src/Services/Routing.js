import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../Pages/Home/HomePage";
import ProfilePage from "../Pages/Profile/ProfilePage";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Seciton */}
        <Route path={"/"} element={<HomePage />} />

        {/* Profile Seciton */}
        <Route path={"/profile"} element={<ProfilePage />} />

      </Routes>
    </BrowserRouter>
  );
}
