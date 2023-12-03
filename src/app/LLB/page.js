import CollegeCard from "@/components/CollegeCard";
import React from "react";

export const metadata = {
  title: "LLB",
  description: "LLB Previous Paper",
  tag: "llb, ballb",
};

const page = () => {
  return (
    <div>
      <div className="w-full h-[100vh]">
        <CollegeCard collegeName="University Of Mumbai" collegeCode="mu" />
        <CollegeCard collegeName="University Of Pune" collegeCode="pu" />
      </div>
    </div>
  );
};

export default page;
