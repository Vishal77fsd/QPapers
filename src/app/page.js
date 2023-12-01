import React from "react";
import Navbar from "@/components/Navbar";
import CountDown from "@/components/CountDown";
import Home from "@/components/Home";
import GovernmentExam from "@/components/GovernmentExam";
import Footer from "@/components/Footer";

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
        <GovernmentExam />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
