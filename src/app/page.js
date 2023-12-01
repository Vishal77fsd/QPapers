import React from "react";
import Navbar from "@/components/Navbar";
import CountDown from "@/components/CountDown";
import Home from "@/components/Home";

export const metadata = {
  title: "Get All Previous Papers Here",
  description: "BA.LLB Previous Paper",
};

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Home />
      <div>
        <CountDown />
      </div>
    </div>
  );
};

export default page;
