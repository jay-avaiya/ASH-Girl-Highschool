import React from "react";

const ApplicationConfirmation = () => {
  return (
    <div className="w-full h-[450px] md:h-[345px] lg:h-[460px] xl:h-[572px] px-7.5 py-8 border-2 border-[#CC4237]  rounded-4xl  lg:rounded-[50px] space-y-10">
      <div className="border border-[#CC4237] w-[220px] md:w-[265px] lg:w-[316px] xl:w-[416px] text-center rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
        <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-montserrat font-medium -tracking-[.7px] lg:-tracking-[1.99px] text-[#CC4237] md:leading-10 lg:leading-16 px-6 py-1">
          Application Confirmation
        </h3>
      </div>

      <div className="w-[90%] md:w-[75%] h-[1px] bg-gradient-to-r from-[#B3130F40] via-[#B3130F] to-[#B3130F40]" />

      <p className="text-lg md:text-xl lg:text-2xl xl:text-[32px] text-[#213455] font-lato">
        Once the student clears the evaluation and document check, parents will
        receive an official confirmation. Admission will be secured after
        payment of fees and completion of formalities. A welcome kit, school
        rules, academic calendar, and other details will be shared after final
        enrollment.
      </p>
    </div>
  );
};

export default ApplicationConfirmation;
