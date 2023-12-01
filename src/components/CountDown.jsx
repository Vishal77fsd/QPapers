import React from "react";
import { CalendarToday } from "@mui/icons-material";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CountDown = () => {
  function dateDiff(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = date2 - date1;
    const days = Math.floor(difference / oneDay);
    return days;
  }
  const today = new Date();
  const examDate = new Date("2024-06-26");
  let daysUntilExam = dateDiff(today, examDate);

  const upscexamDate = new Date("2024-02-24");
  let upscdaysUntilExam = dateDiff(today, upscexamDate);

  setInterval(() => {
    daysUntilExam = dateDiff(today, examDate);
    upscdaysUntilExam = dateDiff(today, upscexamDate);
    console.log("setInterval");
  }, 1000 * 60 * 60);

  return (
    <div className="mt-[130px] ">
      <h1 className="text-red-700 text-2xl font-bold text-center">
        UPSC EXAMS
      </h1>
      <div className="grid grid-flow-col grid-cols-2  gap-5 p-4">
        <div
          className={`p-4 text-center bg-blue-900 rounded-md hover:bg-blue-500 transition-colors`}
        >
          <h1 className="text-xl font-semibold">Preliminary Exam</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <CalendarToday />
            {daysUntilExam} Days Remaning For Exam
          </div>

          <div className="text-black mt-2">
            Preliminary exam is scheduled for May 26, 2024
          </div>
          <Link
            href="https://upsconline.nic.in/"
            target="_blank"
            className="mt-2 flex justify-center items-center gap-2"
          >
            Offical Website <OpenInNewIcon fontSize="medium" />
          </Link>
        </div>
        <div className="p-4 text-center bg-blue-900 rounded-md hover:bg-blue-500 transition-colors">
          <h1 className="text-xl font-semibold">UPSC Mains</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <CalendarToday />
            {upscdaysUntilExam} Days Remaning For Exam
          </div>
          <div className="text-black mt-2">
            UPSC Mains 2024 exam will take place from September 20, 2024
          </div>
          <Link
            href="https://upsconline.nic.in/"
            target="_blank"
            className="mt-2 flex justify-center items-center gap-2"
          >
            Offical Website <OpenInNewIcon fontSize="medium" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
