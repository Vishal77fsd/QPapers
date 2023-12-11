import SemPaper from "@/components/SemPaper";
import React from "react";

export const metadata = {
  title: "2018-2019 LLB Question Papers",
  description: "2018-2019 LLB Question Papers",
  tag: "llb, ballb",
};

const page = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-5 justify-center p-4">
        {/* Semester 1 */}
        <div className=" p-4 rounded-md mt-5 md:w-[40%] w-full bg-[#03001C]">
          <h1 className="font-bold">Semester 1</h1>
          <div className="flex flex-wrap gap-2">
            <SemPaper title="Contract" pdfName="Contract1-2019" />
            <SemPaper title="Labour Law" pdfName="LabourLaw-2019" />
            <SemPaper title="Torts" pdfName="Torts-2019" />
            <SemPaper title="Legal Language" pdfName="LegalLanguage-2019" />
          </div>
        </div>

        {/* Semester 2 */}
        <div className="p-4 rounded-md mt-5 md:w-[40%] w-full bg-[#03001C]">
          <h1 className="font-bold">Semester 2</h1>
          <div className="flex flex-wrap gap-2">
            <SemPaper title="Law Of Crimes" pdfName="LawofCrimes" />
            <SemPaper title="Constitutional Law" pdfName="LawofCrimes" />
            <SemPaper title="Family Law 1" pdfName="LawofCrimes" />
            <SemPaper title="Environmental Law" pdfName="LawofCrimes" />

            <a href="/ConstitutionalLaw.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Constitutional Law
              </div>
            </a>
            <a href="/FamilyLaw.pdf">
              <div className="p-2 rounded-md bg-slate-800">Family Law 1</div>
            </a>
            <a href="/EnvironmentalLaw.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Environmental Law
              </div>
            </a>
          </div>
        </div>

        {/* Semester 3 */}
        <div className="p-4 rounded-md mt-5 md:w-[40%] w-full bg-[#03001C]">
          <h1 className="font-bold">Semester 3</h1>
          <div className="flex flex-wrap gap-2">
            <a href="/AdministrativeLaw.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Administrative Law
              </div>
            </a>
            <a href="/FamilyLaw2.pdf">
              <div className="p-2 rounded-md bg-slate-800">Family Law 2</div>
            </a>
            <a href="/TransferofProperty.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Transfer Of Property
              </div>
            </a>
            <a href="/CompanyLaw.pdf">
              <div className="p-2 rounded-md bg-slate-800">Company Law</div>
            </a>
          </div>
        </div>

        {/* Semester 4 */}
        <div className="p-4 rounded-md mt-5 md:w-[40%] w-full bg-[#03001C]">
          <h1 className="font-bold">Semester 4</h1>
          <div className="flex flex-wrap gap-2">
            <a href="/Jurisprudence.pdf">
              <div className="p-2 rounded-md bg-slate-800">Jurisprudence</div>
            </a>
            <a href="/Contract2.pdf">
              <div className="p-2 rounded-md bg-slate-800">Contract 2</div>
            </a>
            <a href="/LandLaws.pdf">
              <div className="p-2 rounded-md bg-slate-800">Land Laws</div>
            </a>
          </div>
        </div>

        {/* Semester 5 */}
        <div className="p-4 rounded-md mt-5 md:w-[40%] w-full bg-[#03001C]">
          <h1 className="font-bold">Semester 5</h1>
          <div className="flex flex-wrap gap-2">
            <a href="/CPC.pdf">
              <div className="p-2 rounded-md bg-slate-800">CPC</div>
            </a>
            <a href="/CRPC.pdf">
              <div className="p-2 rounded-md bg-slate-800">CRPC</div>
            </a>
            <a href="/IOS.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Interpretation Of Statutes
              </div>
            </a>
            <a href="/PublicInternationalLaw.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Public International Law and Human Rights
              </div>
            </a>
          </div>
        </div>

        {/* Semester 6 */}
        <div className="p-4 rounded-md mt-5 md:w-[40%] w-full bg-[#03001C]">
          <h1 className="font-bold">Semester 6</h1>
          <div className="flex flex-wrap gap-2">
            <a href="/ADR.pdf">
              <div className="p-2 rounded-md bg-slate-800">
                Alternate Dispute Resolution System
              </div>
            </a>
            <a href="/LawofEvidence.pdf">
              <div className="p-2 rounded-md bg-slate-800">Law Of Evidence</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
