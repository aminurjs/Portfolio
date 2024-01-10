import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/DYjLg47/2150898496.jpg)] bg-right-top ">
      <div className="bg-[url(https://i.ibb.co/5jTpSGG/home-background-overlay.png)] bg-cover bg-no-repeat">
        <div className="bg-gradient-to-t from-black pt-36 pb-28">
          <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white  font-semibold  mb-5">
              {"Hi I'm "}
              <span className="text-xs md:text-2xl lg:text-4xl text-yellow-20">
                <TypeAnimation
                  sequence={[
                    "Aminur Rahman",
                    1000,
                    "Font-End Developer",
                    1000,
                    "React Developer",
                    1000,
                    "Jr MERN Developer",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-100  max-w-2xl mb-10">
              {"I'm"} a passionate Front End Developer with a love for creating
              seamless user experiences. I specialize in React and enjoy turning
              complex problems into elegant, intuitive solutions.
            </p>
            <a href="#projects">
              <button className="py-3 px-8 md:px-10 text-blue-1 bg-yellow-20 mr-5 rounded">
                See Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
