import { Globe, Mail, MapPin, PhoneOutgoing } from "lucide-react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiYoutubeLogo } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(100, "Name cannot exceed 100 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    number: yup
      .string()
      .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
      .required("Number is required"),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters")
      .max(150, "Subject cannot exceed 150 characters")
      .required("Subject is required"),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message cannot exceed 500 characters")
      .required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({ resolver: yupResolver(contactSchema), mode: "onChange" });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Form Data Submitted: ", data);

    setSuccess(true);
    reset();

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col px-3 md:px-8 lg:px-14 items-center gap-36">
      <div className="flex flex-col items-center gap-y-10">
        <h3 className="text-[#CC4237] font-bold font-montserrat text-3xl lg:text-[34px]">
          Get in Touch
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10 xl:gap-24 items-start">
          <div className="bg-white shadow-md shadow-black/25 space-y-4 rounded-[20px] px-6 py-10 h-[30vh]">
            <div className="flex items-center gap-4 text-[#B3130F]">
              <Globe />
              <h4 className="font-montserrat font-semibold text-2xl">
                Website
              </h4>
            </div>
            <p>www.AshSchoolNursing.com</p>
          </div>

          <div className="bg-white shadow-md shadow-black/25 space-y-4 rounded-[20px] px-6 py-10 h-[30vh]">
            <div className="flex items-center gap-4 text-[#B3130F]">
              <PhoneOutgoing />
              <h4 className="font-montserrat font-semibold text-2xl">
                Phone No.
              </h4>
            </div>
            <p className="text-lg">+91 9427073676</p>
          </div>

          <div className="bg-white shadow-md shadow-black/25 space-y-4 rounded-[20px] px-6 py-10 h-[30vh]">
            <div className="flex items-center gap-4 text-[#B3130F]">
              <Mail />
              <h4 className="font-montserrat font-semibold text-2xl">Email</h4>
            </div>
            <p className="text-lg">sspatel71@yahoo.in</p>
          </div>

          <div className="bg-white shadow-md shadow-black/25 space-y-4 rounded-[20px] px-6 py-10 h-[30vh]">
            <div className="flex items-center gap-4 text-[#B3130F]">
              <MapPin />
              <h4 className="font-montserrat font-semibold text-2xl">
                Location
              </h4>
            </div>
            <p>
              Ash Education Trust, Vijapur, Amrut Vidyadham, <br />
              Visnagar <br />
              Road,Vijapur-382870.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="bg-[#FFEDEA] p-2 md:p-6 rounded-[48px] h-fit shadow-[0_0_21.2px_0_rgba(255,120,52,0.5)]">
          <div className="bg-[#FFD5CF] p-2 md:p-6 rounded-[50px] h-fit">
            <div className="bg-[#F24F3599] p-2 md:p-6 rounded-[50px] h-fit">
              {/* ✅ ONLY LAYOUT FIX HERE */}
              <div className="border-2 border-[#CC4237] rounded-[50px] bg-white min-h-[unset] md:min-h-[850px] w-full max-w-[900px] px-6 md:px-10 flex flex-col py-10 space-y-10 items-center">
                <h3 className="text-2xl md:text-3xl lg:text-[34px] text-[#CC4237] font-inter font-bold">
                  Send Us a Message
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-14 gap-x-0 md:gap-x-10"
                >
                  <div>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Your Name"
                      className="w-full text-xl font-inter placeholder:font-inter outline-none px-4 py-3 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Your Email"
                      className="w-full text-xl font-inter placeholder:font-inter outline-none px-4 py-3 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("number")}
                      type="text"
                      placeholder="Your Number"
                      className="w-full text-xl font-inter placeholder:font-inter outline-none px-4 py-3 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                    />
                    {errors.number && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.number.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="Your Subject"
                      className="w-full text-xl font-inter placeholder:font-inter outline-none px-4 py-3 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <textarea
                      {...register("message")}
                      rows="7"
                      placeholder="Your Message"
                      className="w-full text-xl font-inter placeholder:font-inter outline-none px-6 py-4 rounded-[20px] md:rounded-[50px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {success && (
                    <p className="col-span-1 md:col-span-2 text-center text-green-600 font-semibold">
                      Your message has been sent successfully!
                    </p>
                  )}

                  {/* ✅ ONLY LAYOUT FIX HERE */}
                  <button
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    className={`col-span-1 md:col-span-2 font-manrope font-bold text-xl text-white bg-[#CC4237] py-3 px-6 rounded-full w-full cursor-pointer transition-all duration-200 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute hidden left-16 top-18 xl:flex items-center justify-center border border-[#CC4237] rounded-full text-[#CC4237] w-[90px] h-[90px]">
          <FaInstagram size={55} />
        </div>

        <div className="absolute hidden right-10 top-1/4 xl:flex items-center justify-center border border-[#CC4237] rounded-full text-[#CC4237] w-[90px] h-[90px]">
          <FaXTwitter size={55} />
        </div>

        <div className="absolute hidden left-30 bottom-1/3 xl:flex items-center justify-center border border-[#CC4237] rounded-full text-[#CC4237] w-[90px] h-[90px]">
          <PiYoutubeLogo size={55} />
        </div>

        <div className="absolute hidden right-25 bottom-1/4 xl:flex items-center justify-center border border-[#CC4237] rounded-full text-[#CC4237] w-[90px] h-[90px]">
          <TbBrandLinkedin size={55} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
