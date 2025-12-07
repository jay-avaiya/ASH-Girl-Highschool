import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-screen bg-[#213455] text-white">
      <div className="relative mt-10">
        <img
          src="/quote.png"
          alt="quote"
          className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] xl:w-[60px] xl:h-[60px] 
          absolute -left-12 -top-5 md:-left-14  xl:-left-18 md:-top-7 rotate-2"
        />
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-extrabold">
          Principal Message
        </h3>
      </div>

      <img
        src="/person.png"
        alt="person"
        className="w-[70%] md:w-[50%] lg:w-[28%] xl:w-[25%] h-[60vh] rounded-t-full object-cover border-6 border-white"
      />

      <p className="text-sm md:text-xl lg:text-2xl lg:w-[55%]  xl:w-[45%] text-center">
        Ash Girls School was established with the belief that education is the
        most powerful tool to shape young minds and communities.
      </p>
    </div>
  );
};

export default Message;
