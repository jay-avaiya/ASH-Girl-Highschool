import CardLeft from "../../../layouts/main_component/About And Mission/CardLeft";
import CardRight from "../../../layouts/main_component/Vission And Purpose/CardRight";
import Calendar from "./_components/Calendar";
import Events from "./_components/Events";
import Gallery from "./_components/Gallery";
import HeroSlider from "./_components/HeroSlider";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-36">
      <HeroSlider />

      <CardLeft
        title={"About Us"}
        buttonRequired={true}
        i1={"/one.jpg"}
        i2={"/two.jpg"}
        i3={"/three.jpg"}
        i4={"/four.jpg"}
      />

      <CardRight
        title={"Vision"}
        para={
          "We aim to build young girls into strong, educated, confident, and value-driven citizens.\n By blending modern teaching methods with moral values and cultural learning, we help students develop leadership, discipline, and a positive attitude towards life."
        }
        buttonRequired={false}
        i1={"/five.jpg"}
        i2={"/seven.jpg"}
        i3={"/six.jpg"}
      />

      <Calendar />

      <Events />

      <Gallery />
    </div>
  );
};

export default HomePage;
