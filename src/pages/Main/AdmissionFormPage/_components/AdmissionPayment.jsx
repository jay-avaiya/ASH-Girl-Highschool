import { ArrowRight, Pencil } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const AdmissionPayment = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const Schema = Yup.object().shape({
    payment: Yup.string().required("Please select a payment method"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const submitForm = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("PAYMENT DATA => ", data);

    setShowSuccessMsg(true);
    setTimeout(() => setShowSuccessMsg(false), 2000);

    reset();
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#CC4237] rounded-4xl  lg:rounded-[50px] space-y-10">
      {/* title */}
      <div className="border border-[#CC4237] w-[220px] md:w-[265px] lg:w-[316px] xl:w-[416px] text-center rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
        <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-montserrat font-medium -tracking-[.7px] lg:-tracking-[1.99px] text-[#CC4237] md:leading-10 lg:leading-16 px-6 py-1">
          Admission Payment
        </h3>
      </div>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-2">
          <div className="w-[300px] md:w-[400px] lg:w-[540px] xl:w-[703px] space-y-8 md:space-y-14 pr-8">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#213455]">
                Admission Fee Amount
              </h3>
              <input
                type="text"
                value="1,50,499 Rs"
                disabled
                className="w-full px-6 py-2 lg:py-3 bg-white shadow-md rounded-[13px] text-sm md:text-lg lg:text-xl xl:text-[28px] text-[#25272980]"
              />
            </div>

            {/* payment methods */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#213455]">
                Payment Methods
              </h3>

              <div className="flex items-center justify-between w-full">
                <label className="flex items-center gap-x-2 lg:gap-x-6">
                  <input type="radio" {...register("payment")} value="upi" />
                  <img
                    src="/upi.png"
                    className="
                    w-[30px] h-[20px]
                    md:w-[35px] md:h-[20px]
                    lg:w-[45px] lg:h-[30px]
                    xl:w-[59px] xl:h-[44px] object-cover"
                  />
                </label>

                <label className="flex items-center gap-x-2 lg:gap-x-6">
                  <input type="radio" {...register("payment")} value="paytm" />
                  <img
                    src="/paytm.png"
                    className="
                    w-[30px] h-[20px]
                    md:w-[35px] md:h-[20px]
                    lg:w-[45px] lg:h-[30px]
                    xl:w-[59px] xl:h-[44px] object-cover"
                  />
                </label>

                <label className="flex items-center gap-x-2 lg:gap-x-6">
                  <input
                    type="radio"
                    {...register("payment")}
                    value="phonepe"
                  />
                  <img
                    src="/phonepe.png"
                    className=" 
                    w-[30px] h-[20px]
                    md:w-[35px] md:h-[20px]
                    lg:w-[45px] lg:h-[30px]
                    xl:w-[59px] xl:h-[44px] object-cover"
                  />
                </label>

                <label className="flex items-center gap-x-2 lg:gap-x-6">
                  <input type="radio" {...register("payment")} value="gpay" />
                  <img
                    src="/gpay.png"
                    className="
                    w-[30px] h-[20px]
                    md:w-[35px] md:h-[20px]
                    lg:w-[45px] lg:h-[30px]
                    xl:w-[59px] xl:h-[44px] object-cover"
                  />
                </label>
              </div>

              <p className="text-red-500 text-[10px]">
                {errors.payment?.message}
              </p>
            </div>

            {/* Fee Receipt */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#213455]">
                Fee Receipt
              </h3>
              <div className="flex flex-row items-center gap-5 md:gap-8">
                <button
                  type="button"
                  className="flex items-center px-2 py-2 lg:py-3 border border-dashed rounded-[13px] border-[#707070CC] gap-3"
                >
                  <span className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#707070CC]">
                    View
                  </span>
                  <Pencil className="text-[#707070CC] w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                </button>

                <button
                  type="button"
                  className="flex items-center px-2 py-2 lg:py-3 border border-dashed rounded-[13px] border-[#707070CC] gap-3"
                >
                  <span className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#707070CC]">
                    Download
                  </span>
                  <Pencil className="text-[#707070CC] w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Fees breakdown */}
          <div className="w-[300px] md:w-[440px] lg:w-[540px] xl:w-[678px] flex flex-col gap-5 md:gap-10 mt-5 md:mt-0">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#213455]">
              Fees Breakdown
            </h3>

            <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-full bg-white rounded-[13px] shadow-md py-3 px-3 border border-[#213455]"
                >
                  <ul className="list-disc pl-5 marker:text-[#213455]">
                    <li className="text-sm lg:text-lg xl:text-[22px] text-[#213455]">
                      Registration Fees
                    </li>
                    <span className=" text-sm lg:text-[16px] xl:text-[18px] text-[#25272980]">
                      1,00,000 Rs
                    </span>
                  </ul>
                </div>
              ))}
            </div>

            {/* submit */}
            <button
              disabled={isSubmitting}
              className={`flex items-center gap-5 h-[35px] lg:h-[42px] xl:h-[50px] rounded-full justify-center border w-full cursor-pointer 
                ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#213455] text-white hover:bg-transparent hover:text-[#213455] hover:border-[#213455]"
                }`}
              type="submit"
            >
              <span className="text-sm lg:text-lg xl:text-[20px]">
                {isSubmitting ? "Processing..." : "Submit"}
              </span>

              {!isSubmitting && (
                <ArrowRight className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]" />
              )}
            </button>

            {/* Success msg */}
            {showSuccessMsg && (
              <p className="text-green-600 text-xl text-center font-semibold">
                Payment submitted successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionPayment;
