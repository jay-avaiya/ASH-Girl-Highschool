import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";
import Map from "./main_component/Map";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Map />
      <Footer />
    </div>
  );
}
