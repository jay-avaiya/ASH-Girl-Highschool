import React from "react";

const AdmissionStep = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="relative w-[1400px] max-w-full h-[450px] mx-auto hidden xl:flex items-end justify-center overflow-hidden">
        <img src="/step.png" alt="" className="w-fit h-fit" />

        {/* Step 1 */}
        <div className="absolute left-[12.8%] top-[4.5%] flex">
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
        <div className="absolute left-[22.2%] bottom-[23%] flex">
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
        <div className="absolute right-[8.2%] top-[3.5%] flex">
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
        <div className="absolute -right-[2.5%] bottom-[36.9%] flex">
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

      <div className="relative h-fit w-full xl:hidden">
        <div>
          <img src="/step2.png" alt="" className="h-screen w-full" />
        </div>

        {/* step 1 */}
        <div className="absolute top-1  flex gap-3">
          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg bg-white shrink-0">
            01
          </div>
          <div className="flex flex-col items-center">
            <div className="py-2 md:px-6 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-[20vh] md:w-[40vh]">
              <h3 className="font-lato font-medium  md:text-lg text-[#CC4237]">
                Application Form Submission
              </h3>
            </div>
            <p className="text-[#1C375E] text-xs md:text-sm md:w-[72%] mt-1 text-center">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* step 2 */}
        <div className="absolute top-[30%] left-[35%] md:top-1/4 md:left-1/30 -translate-x-1/2  flex gap-3">
          <div className="flex flex-col items-center">
            <div className="py-2 md:px-6 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-[20vh] md:w-[40vh]">
              <h3 className="font-lato font-medium md:text-xl text-[#CC4237]">
                Application Form Submission
              </h3>
            </div>
            <p className="text-[#1C375E] text-xs md:text-sm md:w-[72%] mt-1 text-center">
              Fill out the online application or visit our campus office.
            </p>
          </div>

          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg bg-white shrink-0">
            02
          </div>
        </div>

        {/* step 3 */}
        <div className="absolute bottom-[25%] left-[90%] md:bottom-1/3 md:left-[120%] -translate-x-1/2  flex gap-3">
          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg bg-white shrink-0">
            03
          </div>
          <div className="flex flex-col items-center">
            <div className="py-2 px-1 md:px-6 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-[30vh] md:w-[40vh]">
              <h3 className="font-lato font-medium md:text-xl text-[#CC4237]">
                Application Form Submission
              </h3>
            </div>
            <p className="text-[#1C375E] text-xs md:text-sm w-[72%] mt-1 text-center">
              Fill out the online application or visit our campus office.
            </p>
          </div>
        </div>

        {/* step 4 */}
        <div className="absolute bottom-10 left-[25%] md:bottom-0 md:-left-[40%] -translate-x-1/2  flex gap-3">
          <div className="flex flex-col items-center">
            <div className="py-2 md:px-6 rounded-full bg-white text-center shadow-[0_3px_13px_0_rgba(0,0,0,.25)] w-[30vh] md:w-[40vh]">
              <h3 className="font-lato font-medium md:text-xl text-[#CC4237]">
                Application Form Submission
              </h3>
            </div>
            <p className="text-[#1C375E] text-xs md:text-sm w-[72%] mt-1 text-center">
              Fill out the online application or visit our campus office.
            </p>
          </div>

          <div className="w-11 h-11 rounded-full border border-[#CC4237] flex items-center justify-center font-lato text-[#CC4237] text-lg bg-white shrink-0">
            04
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionStep;
