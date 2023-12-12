import { Link } from "react-router-dom";
import { BsFillEnvelopeAtFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/YX2wtZJ/bg-footer1.jpg)] bg-cover pt-20 pb-5 -mb-6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="px-5 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b pb-6 border-gray-500">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <img
              className="w-52 md:w-[250px]"
              src="https://i.ibb.co/rfZfGrk/logo-no-background.png"
              alt=""
            />
            <p className=" text-[#FFFFFFB2] mt-4">
              {"I'm"} a passionate Front End Developer with a love for creating
              seamless user experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Useful Links
            </h3>
            <ul>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="#about"
                >
                  About
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="/donation"
                >
                  Skills
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="/statistics"
                >
                  Projects
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="/statistics"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">Support</h3>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Resources</p>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Faqs </p>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Privacy Policy</p>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Careers</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Our Contact
            </h3>
            <a
              href="mailto:dev.aminur@gmail.com"
              className="text-[#FFFFFFB2] mb-3 text-sm flex items-center gap-2"
            >
              <BsFillEnvelopeAtFill className="text-lg text-dark-03" />
              dev@aminur.com
            </a>
            <a
              href="tel:+8801755143182"
              className="text-[#FFFFFFB2] mb-3 text-sm flex items-center gap-2"
            >
              <BsFillTelephoneFill className="text-lg text-dark-03" />
              +111-2222-3333
            </a>
            <a
              href=""
              className="text-[#FFFFFFB2] mb-6 text-sm flex items-center gap-2"
            >
              <FaLocationDot className="text-xl text-dark-03" />
              Rangpur City in Bangladesh
            </a>
          </div>
        </div>
        <div className="py-6 flex justify-between px-5 lg:px-0">
          <p className="text-[#FFFFFFB2] text-center">
            Copyright © 2023 Aminur Rahman. All Rights Reserved.
          </p>
          <div className="text-[#FFFFFFB2] text-2xl hidden md:flex gap-4">
            <Link>
              <AiOutlineInstagram />
            </Link>
            <Link>
              <AiFillFacebook />
            </Link>
            <Link>
              <AiOutlineTwitter />
            </Link>
            <Link>
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
