import {
  FaGithub,
  FaAngleRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const About = () => {
  return (
    <div id="about" className="bg-[#252839] pt-20 pb-28">
      <div className="max-w-7xl mx-auto  flex gap-12 py-16 items-center px-5 flex-col md:flex-row">
        <div className="border border-yellow-20 p-3 relative w-full md:w-2/5 lg:w-1/2 mr-12 ml-5 md:mr-5">
          <img src="https://i.ibb.co/B4F7RTL/2151005751.jpg" alt="2151005751" />
          <div className="absolute -bottom-5 -right-10 w-48 md:w-40 lg:w-60 p-2 bg-yellow-20">
            <img src="https://i.ibb.co/Q8HdVtk/31047.jpg" alt="" />
          </div>
        </div>
        <div className="w-full md:w-3/5 lg:w-1/2 mt-6">
          <h3 className="text-yellow-20 tracking-[5px] mb-3">
            WELCOME TO MY WEBSITE
          </h3>
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-semibold mb-2">
            A LITTLE BIT ABOUT ME
          </h2>
          <div className="w-20 h-1.5 bg-yellow-20 my-5"></div>
          <div className="text-white mb-8">
            <p>
              I specialize in front-end and MERN Stack web development. My
              expertise in coding, troubleshooting intricate designs, and
              ensuring project completion within deadlines.
            </p>

            <p>
              I am dedicated to leveraging intelligent ideas through innovative,
              standards-based, and open-source front-end and MERN Stack
              development. Always eager for new challenges, I actively seek
              opportunities to forge meaningful connections in the ever-evolving
              tech landscape.
            </p>
          </div>
          <div className="flex gap-3 items-center text-[#bfbecb]">
            <p className="text-yellow-20">Connect with</p>
            <div className="h-[1px] w-20 bg-[#bfbecb] mt-1"></div>
            <FaAngleRight className="-ml-6 mt-1" />

            <div className=" flex gap-3 items-center ">
              <li className="list-none">
                <a
                  className=" bg-transparent inline-block p-2 border border-[#bfbecb] rounded hover:shadow hover:shadow-yellow-20 duration-300"
                  href="#"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="list-none">
                <a
                  className=" bg-transparent inline-block p-2 border border-[#bfbecb] rounded hover:shadow hover:shadow-yellow-20 duration-300"
                  href="#"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-none">
                <a
                  className=" bg-transparent inline-block p-2 border border-[#bfbecb] rounded hover:shadow hover:shadow-yellow-20 duration-300"
                  href="#"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="list-none">
                <a
                  className=" bg-transparent inline-block p-2 border border-[#bfbecb] rounded hover:shadow hover:shadow-yellow-20 duration-300"
                  href="#"
                >
                  <FaFacebook />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
