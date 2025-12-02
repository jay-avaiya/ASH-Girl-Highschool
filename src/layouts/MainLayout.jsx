import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";
import Map from "./main_component/Map";

export default function MainLayout() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col gap-40">
        <Outlet />
        <div>
          <Map />
          <Footer />
        </div>
      </div>
    </div>
  );
}
