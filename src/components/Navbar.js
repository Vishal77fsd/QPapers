"use client";

import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleClick = () => {
    setShowNavbar(() => !showNavbar);
  };

  return (
    <div className="relative">
      <div className="text-left fixed p-1 border rounded-md top-4 left-4">
        {!showNavbar && (
          <div
            onClick={handleClick}
            className="cursor-pointer transition ease-in-out duration-1000"
          >
            <MenuIcon fontSize="large" />
          </div>
        )}
        {showNavbar && (
          <div
            onClick={handleClick}
            className="cursor-pointer transition ease-in-out duration-1000"
          >
            <MenuOpenIcon fontSize="large" />
          </div>
        )}
      </div>

      <div className="h-20 flex items-center justify-center bg-slate-800">
        <h1 className="text-xl">QPapers</h1>
      </div>

      {showNavbar && (
        <div
          className={`bg-slate-900 fixed w-[90vw] top-4 left-20 rounded-md lefttoright ${styles.lefttoright}`}
        >
          <ul className="flex p-2 gap-2">
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">BA LLB</li>
            </a>
            <a href="/B_COM" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">B.COM</li>
            </a>
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">BAF</li>
            </a>
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">M.COM</li>
            </a>
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">BSC.IT</li>
            </a>
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">MBA</li>
            </a>
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">BCA</li>
            </a>
            <a href="/BA_LLB" className="text-center w-full">
              <li className="bg-blue-800 p-1 rounded-sm">CA</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
