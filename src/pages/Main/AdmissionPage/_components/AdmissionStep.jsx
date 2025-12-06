import React from "react";

const AdmissionStep = () => {
  return (
    <div className="relative w-full h-[450px] flex items-end justify-center">
      <img src="/step.png" alt="" width={"auto"} height={"auto"} />

      {/* Step 1 */}
      <div className="absolute left-[12.8%] top-[.6%] flex">
        <div>
          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg">
            01
          </div>
          <div className="w-[2px] h-[45px] bg-[#CC4237] mx-auto mt-2 relative">
            <span className="absolute -bottom-3 left-1/2  -translate-x-1/2 text-5xl text-[#CC4237]">
              .
            </span>
          </div>
        </div>

        <div className="text-center flex flex-col justify-center items-center w-fit">
          <div className="py-2 px-8 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-fit ">
            <h3 className="font-lato font-medium text-xl text-[#CC4237]">
              Application Form Submission
            </h3>
          </div>
          <p className="text-[#1C375E] text-sm w-[72%] mt-1 text-center">
            Fill out the online application or visit our campus office.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="absolute left-[22.2%] bottom-[24%] flex">
        <div>
          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg">
            02
          </div>
          <div className="w-[2px] h-[45px] bg-[#CC4237] mx-auto mt-2 relative">
            <span className="absolute -bottom-3 left-1/2  -translate-x-1/2 text-5xl text-[#CC4237]">
              .
            </span>
          </div>
        </div>

        <div className="text-center flex flex-col justify-end items-center w-fit">
          <div className="py-2 px-12 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-fit">
            <h3 className="font-lato font-medium text-xl text-[#CC4237]">
              Document Verification
            </h3>
          </div>
          <p className="text-[#1C375E] text-sm w-[72%] mt-1 text-center">
            Fill out the online application or visit our campus office.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="absolute right-[8.6%] top-[.6%] flex">
        <div>
          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg">
            03
          </div>
          <div className="w-[2px] h-[45px] bg-[#CC4237] mx-auto mt-2 relative">
            <span className="absolute -bottom-3 left-1/2  -translate-x-1/2 text-5xl text-[#CC4237]">
              .
            </span>
          </div>
        </div>

        <div className="text-center flex flex-col justify-end items-center w-fit">
          <div className="py-2 px-16 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-fit">
            <h3 className="font-lato font-medium text-xl text-[#CC4237]">
              Admission Payment
            </h3>
          </div>
          <p className="text-[#1C375E] text-sm w-[72%] mt-1 text-center">
            Fill out the online application or visit our campus office.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="absolute -right-[.9%] bottom-[36.9%] flex">
        <div>
          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg">
            04
          </div>
          <div className="w-[2px] h-[45px] bg-[#CC4237] mx-auto mt-2 relative">
            <span className="absolute -bottom-3 left-1/2  -translate-x-1/2 text-5xl text-[#CC4237]">
              .
            </span>
          </div>
        </div>

        <div className="text-center flex flex-col justify-end items-center w-fit">
          <div className="py-2 px-12 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-fit">
            <h3 className="font-lato font-medium text-xl text-[#CC4237]">
              Admission Confirmation
            </h3>
          </div>
          <p className="text-[#1C375E] text-sm w-[72%] mt-1 text-center">
            Fill out the online application or visit our campus office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionStep;
