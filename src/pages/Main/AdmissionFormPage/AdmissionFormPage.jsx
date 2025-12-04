import Banner from "../../../layouts/main_component/Banner";
import AdmissionPayment from "./_components/AdmissionPayment";
import ApplicationConfirmation from "./_components/ApplicationConfirmation";
import ApplicationForm from "./_components/ApplicationForm";
import DocumentVerification from "./_components/DocumentVerification";

const AdmissionFormPage = () => {
  return (
    <div className="flex flex-col items-center gap-40">
      <Banner to={"Admission"} current={"Admission Form"} path="admission" />

      <div className="px-14 w-full flex flex-col items-center gap-25">
        <div className="text-center space-y-4">
          <h3 className="text-[#CC4237] text-[34px] font-montserrat font-semibold">
            Admission Process
          </h3>
          <p className="text-2xl text-[#005478]">
            Follow This Basic Steps to Begin your Nursing Journey To Us
          </p>
        </div>

        <div className="w-full h-auto flex flex-col items-center gap-25">
          <ApplicationForm />
          <DocumentVerification />
          <AdmissionPayment />
          <ApplicationConfirmation />
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormPage;
