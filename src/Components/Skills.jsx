import svg1 from "../assets/1.svg";
import svg2 from "../assets/2.svg";
import svg3 from "../assets/3.svg";
import svg4 from "../assets/4.svg";
import svg5 from "../assets/5.svg";
import svg6 from "../assets/6.svg";
import svg7 from "../assets/7.svg";
import svg8 from "../assets/8.svg";
import svg9 from "../assets/9.svg";
import svg10 from "../assets/next-js.svg";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="bg-[#292C3F]">
      <div className="max-w-7xl mx-auto py-20 px-5">
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-semibold mb-2 text-center">
          Skills
        </h2>
        <h3 className="text-yellow-20 tracking-[3px] uppercase mb-3 text-center">
          A Comprehensive Showcase of My Skillset.
        </h3>
        <div className="w-20 h-1.5 bg-yellow-20 my-5 mx-auto"></div>
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-5 overflow-y-auto h-[500px] md:h-full">
          <Skill img={svg2} text={"HTML5"} duration={"90%"} />
          <Skill img={svg1} text={"CSS3"} duration={"80%"} />
          <Skill img={svg3} text={"Tailwind CSS"} duration={"80%"} />
          <Skill img={svg4} text={"JavaScript ES6+"} duration={"60%"} />
          <Skill img={svg5} text={"REACT.js"} duration={"80%"} />
          <Skill img={svg6} text={"NODE.js"} duration={"40%"} />
          <Skill img={svg7} text={"Firebase"} duration={"30%"} />
          <Skill img={svg8} text={"MongoDB"} duration={"50%"} />
          <Skill img={svg9} text={"EXPRESS.js"} duration={"50%"} />
          <Skill img={svg10} text={"NEXT.js"} duration={"50%"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
