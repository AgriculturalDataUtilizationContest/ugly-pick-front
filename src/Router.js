import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Main } from "./pages/Main";
import { Select } from "./pages/Select/Select";
import PriceDashboard from "./pages/PriceDashboard";
import Search from "./pages/Search";

function AppRoutes() {
  const location = useLocation();
  const hideNav = location.pathname === "/";

  return (
    <>
      {!hideNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forecast" element={<PriceDashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
