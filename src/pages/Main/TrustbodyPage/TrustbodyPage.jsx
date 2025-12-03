import Card from "../../../components/Card";
import Banner from "../../../layouts/main_component/Banner";

const TrustbodyPage = () => {
  return (
    <div className="flex flex-col gap-40">
      <Banner current={"Trust Body"} />

      <div className="flex flex-col items-center text-center px-14 gap-24">
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-[34px] font-bold font-montserrat text-[#CC4237]">
            Managing Committee
          </h3>
          <p className="text-xl w-[64%]">
            At Ash Girls School, our Managing Committee plays a vital role in
            shaping the strategic direction and nurturing the values that define
            our institution. Each member brings a wealth of experience,
            dedication, and a shared commitment to empowering young girls
            through quality education.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustbodyPage;
