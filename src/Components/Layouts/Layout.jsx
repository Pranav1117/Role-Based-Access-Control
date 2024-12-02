import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <div className="fixed h-header_desk w-screen">
          <Navbar />
        </div>
        <main className="min-h-screen_m md:min-h-screen md:h-screen_desk overflow-auto">
          <Outlet />
        </main>
        <div className="h-footer_m md:h-footer_desk">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
