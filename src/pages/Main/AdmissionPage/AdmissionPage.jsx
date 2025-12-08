import { ArrowRight } from "lucide-react";
import Banner from "../../../layouts/main_component/Banner";
import AdmissionSteps from "./_components/AdmissionStep";
import { useNavigate } from "react-router-dom";

const AdmissionPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admission-form");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-36 items-center">
      <Banner current={"Admission"} />

      <div className=" flex flex-col gap-16 items-center px-3 md:px-8 lg:px-14 h-fit">
        <div className="text-center space-y-5">
          <h3 className="text-[34px] text-[#CC4237] font-montserrat font-semibold">
            Admission Process
          </h3>
          <p className="text-2xl text-[#005478]">
            Follow This Basic Steps to Begin your Nursing Journey To Us
          </p>
        </div>

        <div>
          <AdmissionSteps />

          <button
            onClick={handleClick}
            className="w-fit md:h-[50px] h-[45px] bg-[#CC4237] rounded-[50px] text-white font-semibold md:text-[20px] text-[16px] flex justify-center items-center gap-x-4 mx-auto mt-6 px-8 cursor-pointer"
          >
            Start Now <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
