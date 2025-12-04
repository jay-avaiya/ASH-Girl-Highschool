import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
// import { api } from "../../../../../lib/axios";

const ApplicationForm = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const classOption = [
    { label: "Select Class", value: "" },
    { label: "B.Ed — First Year", value: "bed_y1" },
    { label: "B.Ed — Second Year", value: "bed_y2" },
    { label: "D.El.Ed — First Year", value: "deled_y1" },
    { label: "D.El.Ed — Second Year", value: "deled_y2" },
  ];

  const sectionOption = [
    { label: "Select Section", value: "" },
    { label: "Section A (Morning)", value: "a_morning" },
    { label: "Section B (Morning)", value: "b_morning" },
    { label: "Section C (Evening)", value: "c_evening" },
  ];

  const nationalityOption = [
    { label: "Select Nationality", value: "" },
    { label: "Indian — Hindu", value: "indian_hindu" },
    { label: "Indian — Muslim", value: "indian_muslim" },
    { label: "Indian — Christian", value: "indian_christian" },
    { label: "Indian — Sikh", value: "indian_sikh" },
    { label: "Indian — Jain", value: "indian_jain" },
    { label: "Indian — Buddhist", value: "indian_buddhist" },
    { label: "Non-Indian — Other", value: "non_indian_other" },
  ];

  // Form Validation
  const Schema = Yup.object().shape({
    name: Yup.string().required("Full Name is Required").min(3),
    dob: Yup.date()
      .typeError("Invalid date format")
      .max(new Date(), "Date of birth cannot be in the future")
      .min(new Date(1900, 0, 1), "Enter a valid date")
      .required("Date of birth is required"),
    class: Yup.string()
      .notOneOf(["Choose an Option"])
      .required("Please Select a Class"),
    section: Yup.string().required("Please Select a Section"),
    address: Yup.string().required("Address is Required"),
    contact: Yup.string()
      .required("Contact Number is Required")
      .matches(/^[0-9]{10}$/, "Must be 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    adhaar: Yup.string().min(12).max(12).required("Aadhar Number is Required"),
    nationality: Yup.string().required("Please Select a Nationality"),
    gender: Yup.string().required("Please Select a Gender"),
  });

  // Form Submit
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });

  // Form Submit Handler ( api call )
  //   const handleSubmitForm = async (formData) => {
  //     try {
  //       const payload = {
  //         fullName: formData.name,
  //         dateOfBirth: formData.dob,
  //         classApplyingFor: formData.class,
  //         sectionPreference: formData.section,
  //         residentialAddress: formData.address,
  //         contactNumber: formData.contact,
  //         emailAddress: formData.email,
  //         aadharNumber: formData.adhaar,
  //         nationalityAndReligion: formData.nationality,
  //         gender: formData.gender[0].toUpperCase() + formData.gender.slice(1),
  //       };

  //       const { data } = await api.post("/admission-form/application", payload);

  //       const formId = data.data._id;
  //       localStorage.setItem("ADMISSION_FORM_ID", formId); // Id to be use for uploading documents

  //       setShowSuccessMsg(true);
  //       setTimeout(() => setShowSuccessMsg(false), 3000);

  //       reset();
  //     } catch (error) {
  //       console.log("Error Sending Response:", error.message);

  //       alert("Something went wrong while submitting application");
  //     }
  //   };

  // temp
  const handleSubmitForm = () => {
    setShowSuccessMsg(true);
    setTimeout(() => setShowSuccessMsg(false), 3000);
    reset();
  };

  return (
    <div className="w-full px-7.5 py-8 border-2 border-[#CC4237] rounded-4xl lg:rounded-[50px] space-y-6 md:space-y-10">
      <div className="border border-[#CC4237] w-fit text-center rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]">
        <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-montserrat font-medium text-[#CC4237] md:leading-10 lg:leading-16 px-6 py-1">
          Application Form Submission
        </h3>
      </div>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-3 md:gap-24 xl:gap-[247px]">
          {/* Left */}
          <div className="w-[90%] md:w-[440px] lg:w-[550px] xl:w-[745px] space-y-5">
            {/* FULL NAME */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label
                htmlFor="name"
                className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl"
              >
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500 text-xs">{errors.name?.message}</p>
            </div>

            {/* DOB */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label
                htmlFor="dob"
                className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl"
              >
                Date Of Birth
              </label>
              <input
                {...register("dob")}
                type="date"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none appearance-none"
              />
              <p className="text-red-500 text-xs">{errors.dob?.message}</p>
            </div>

            {/* CLASS */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Class Applying For
              </label>
              <select
                {...register("class")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              >
                {classOption.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-xs">{errors.class?.message}</p>
            </div>

            {/* SECTION */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label
                className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl
"
              >
                Section Preference
              </label>
              <select
                {...register("section")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              >
                {sectionOption.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-xs">{errors.section?.message}</p>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Residential Address
              </label>
              <input
                {...register("address")}
                type="text"
                placeholder="Enter Your Full Address"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500 text-xs">{errors.address?.message}</p>
            </div>
          </div>

          {/* Right */}
          <div className="w-[90%] md:w-[440px] lg:w-[550px] xl:w-[745px] space-y-5">
            {/* CONTACT */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Contact Number
              </label>
              <input
                {...register("contact")}
                type="text"
                placeholder="Enter Your Contact Number"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500 text-xs">{errors.contact?.message}</p>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
            </div>

            {/* AADHAAR */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Adhaar Number
              </label>
              <input
                {...register("adhaar")}
                type="text"
                placeholder="Enter Your Adhaar Number"
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              />
              <p className="text-red-500 text-xs">{errors.adhaar?.message}</p>
            </div>

            {/* NATIONALITY */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Nationality & Religion
              </label>
              <select
                {...register("nationality")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              >
                {nationalityOption.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-xs">
                {errors.nationality?.message}
              </p>
            </div>

            {/* GENDER */}
            <div className="flex flex-col gap-3 xl:gap-5">
              <label className="text-[#213455] text-sm md:text-[16px] lg:text-xl xl:text-2xl">
                Gender Selection
              </label>
              <select
                {...register("gender")}
                className="w-full bg-[#FDFDFD] rounded-[14px] text-xs md:text-sm lg:text-lg xl:text-xl px-8 py-2 lg:py-3 xl:py-4.5 shadow-md outline-none"
              >
                <option value="">Choose an Option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <p className="text-red-500 text-xs">{errors.gender?.message}</p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              disabled={isSubmitting}
              className={`flex items-center gap-3 xl:gap-5 py-2 w-full rounded-full justify-center border cursor-pointer ${
                isSubmitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#213455] text-white"
              }`}
              type="submit"
            >
              <span className="text-sm md:text-[16px] lg:text-xl">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
              {!isSubmitting && <ArrowRight className="w-3.5 md:w-4 lg:w-5" />}
            </button>

            {showSuccessMsg && (
              <p className="text-green-600 text-sm lg:text-xl font-semibold mt-3 text-center">
                Form submitted successfully!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
