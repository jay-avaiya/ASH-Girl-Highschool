import Card from "../../../components/Card";
import Banner from "../../../layouts/main_component/Banner";

const AcademicsPage = () => {
  return (
    <div>
      <Banner current={"Academics"} />

      <div className="flex flex-col items-center justify-center gap-16 px-14">
        <h3 className="text-[#CC4237] text-4xl font-montserrat font-bold">
          Faculty
        </h3>
        <div className="grid grid-cols-4 gap-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
