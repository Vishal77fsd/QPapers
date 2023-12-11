import React from "react";

const SemPaper = (props) => {
  const { pdfName, title } = props;
  return (
    <a href={`/${pdfName}.pdf`}>
      <div className="p-2 rounded-md bg-slate-800">{title}</div>
    </a>
  );
};

export default SemPaper;
