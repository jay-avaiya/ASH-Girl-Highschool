import Card from "../../../components/Card";
import CardLeft from "../../../layouts/main_component/About And Mission/CardLeft";
import Banner from "../../../layouts/main_component/Banner";
import CardRight from "../../../layouts/main_component/Vission And Purpose/CardRight";
import Collage from "./_components/Collage";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center gap-36">
      <Banner to={"Home"} current={"About Us"} />

      <div className="flex flex-col items-center text-center space-y-5 px-3 md:px-8 lg:px-14">
        <h3 className="text-[#CC4237] text-3xl lg:text-[34px] font-montserrat font-bold">
          About the School
        </h3>
        <p className="text-[16px] md:text-xl xl:text-2xl w-full xl:w-[91%]">
          Ash Girls School is more than just a place of learning—it's a
          nurturing ground where young minds are empowered to grow, explore, and
          thrive. Founded on the belief that education is the most powerful tool
          for transformation, our school is committed to fostering curiosity,
          compassion, and confidence in every child. <br /> We blend academic
          rigor with joyful learning experiences, ensuring that each student
          feels seen, heard, and inspired. From classroom creativity to outdoor
          adventures, we celebrate every step of the learning journey.
        </p>
      </div>

      <Collage />

      <CardLeft
        title={"Mission"}
        buttonRequired={false}
        para={
          <>
            To provide a holistic, inclusive, and values-driven education that
            equips girls with the skills, empathy, and resilience to shape a
            better world. <br /> We aim to:
            <ul className="list-disc list-outside space-y-2 pl-10">
              <li>
                Cultivate a love for learning through engaging and interactive
                teaching methods
              </li>
              <li>
                Encourage critical thinking, collaboration, and creativity
              </li>
              <li>
                Build a strong foundation in academics, arts, and life skills
              </li>
              <li>Foster respect for diversity, heritage, and community</li>
            </ul>
          </>
        }
      />

      <CardRight
        title={"Purpose"}
        buttonRequired={false}
        i1={"/five.jpg"}
        i2={"/seven.jpg"}
        i3={"/six.jpg"}
        para={
          <>
            We envision a future where every girl becomes a confident,
            compassionate, and capable leader—ready to contribute meaningfully
            to society. <br /> Our vision is rooted in:
            <ul className="list-disc list-outside space-y-2 pl-10">
              <li>Empowering students to dream big and pursue excellence</li>
              <li>
                Creating a safe and joyful environment where every child feels
                valued
              </li>
              <li>
                Strengthening the bond between school, family, and community
              </li>
              <li>
                Inspiring lifelong learners who lead with integrity and purpose
              </li>
            </ul>
          </>
        }
      />

      {/* Faculty Card */}
      <div className="flex flex-col items-center justify-center gap-16 px-8 lg:px-14 ">
        <h3 className="text-[#CC4237] text-3xl lg:text-[34px] font-montserrat font-bold">
          Faculty
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {/* <Card /> */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
