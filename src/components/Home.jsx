import { Mouse } from "@mui/icons-material";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="font-sans font-bold text-center text-[70px] mt-20 ">
        GET ALL YOUR
        <br />
        <span className="bg-slate-800 p-2 rounded-md shadow-lg  shadow-slate-900">
          ENTRANCE EXAM
        </span>
        <br />
        COUNTDOWN HERE
      </h1>

      <div className="text-center mt-20 text-2xl font-semibold">
        SCROLL DOWN
      </div>
      <div className="text-center text-5xl mt-10 animate-bounce">
        <Mouse fontSize="inherit" />
      </div>
    </div>
  );
};

export default Home;
