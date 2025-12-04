import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-screen bg-[#213455] text-white">
      <div className="relative mt-10">
        <img
          src="/quote.png"
          alt="quote"
          className="w-[60px] h-[60px] 
          absolute -left-18 -top-7 rotate-2"
        />
        <h3 className="text-5xl font-montserrat font-extrabold">
          Principal Message
        </h3>
      </div>

      <img
        src="/person.png"
        alt="person"
        className="w-[23%] h-[60vh] rounded-t-full object-cover border-6 border-white"
      />

      <p className="text-2xl w-[45%] text-center">
        Ash Girls School was established with the belief that education is the
        most powerful tool to shape young minds and communities.
      </p>
    </div>
  );
};

export default Message;
