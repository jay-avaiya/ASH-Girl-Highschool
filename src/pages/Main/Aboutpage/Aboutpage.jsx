import CardLeft from "../../../layouts/main_component/About And Mission/CardLeft";
import Banner from "../../../layouts/main_component/Banner";
import CardRight from "../../../layouts/main_component/Vission And Purpose/CardRight";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-40">
      <Banner to={"Home"} current={"About Us"} />

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
    </div>
  );
};

export default AboutPage;
