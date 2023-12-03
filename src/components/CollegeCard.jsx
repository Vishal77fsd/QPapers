import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import DateRangeIcon from "@mui/icons-material/DateRange";

const CollegeCard = ({ collegeName, collegeCode }) => {
  //   console.log(props);
  return (
    <div className="border sm:w-full md:w-[80%] lg:w-[70%] m-auto p-4 rounded-sm mt-10">
      <h1 className="font-bold text-4xl flex gap-2 items-center text-red-500">
        <GavelIcon fontSize="large" />
        LLB
        <span>(3 Years)</span>
      </h1>

      <h1 className="text-2xl flex gap-2 items-center mt-4">
        <SchoolIcon fontSize="large" />
        {collegeName}
      </h1>

      <div className="flex gap-4 mt-4">
        <a
          href={`LLB/${collegeCode}/2018-2019`}
          className="rounded-md bg-[#3C2A21] hover:bg-[#0b0e20] "
        >
          <div className="p-2 text-[#D5CEA3] flex gap-2 items-center">
            <DateRangeIcon />
            2018-2019
          </div>
        </a>
        <a
          href={`LLB/${collegeCode}/2018-2019`}
          className="rounded-md bg-[#3C2A21] hover:bg-[#0b0e20]"
        >
          <div className="p-2 text-[#D5CEA3] flex gap-2 items-center">
            <DateRangeIcon />
            2019-2020
          </div>
        </a>
        <a
          href={`LLB/${collegeCode}/2018-2019`}
          className="rounded-md bg-[#3C2A21] hover:bg-[#0b0e20]"
        >
          <div className="p-2 text-[#D5CEA3] flex gap-2 items-center">
            <DateRangeIcon />
            2020-2021
          </div>
        </a>
        <a
          href={`LLB/${collegeCode}/2018-2019`}
          className="rounded-md bg-[#3C2A21] hover:bg-[#0b0e20]"
        >
          <div className="p-2 text-[#D5CEA3] flex gap-2 items-center">
            <DateRangeIcon />
            2021-2022
          </div>
        </a>
        <a
          href={`LLB/${collegeCode}/2018-2019`}
          className="rounded-md bg-[#3C2A21] hover:bg-[#0b0e20]"
        >
          <div className="p-2 text-[#D5CEA3] flex gap-2 items-center">
            <DateRangeIcon />
            2022-2023
          </div>
        </a>
      </div>
    </div>
  );
};

export default CollegeCard;
