import { FaAngleRight } from "react-icons/fa6";

const PinnedProject = () => {
  return (
    <div className="flex justify-evenly gap-10 py-6 md:flex-row flex-col-reverse">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <h2 className=" text-white text-3xl lg:text-4xl font-semibold mb-2">
          HotelHub
        </h2>
        <h4 className="text-gray-100 tracking-[3px] uppercase mb-3">
          Generic Hotel Booking Website
        </h4>
        <p className="text-gray-200 mb-6">
          This site is a React single-page e-commerce web application. It is
          built with react-router, Firebase, JWS Authentication, express js, and
          MongoDB. <br />
          User can book a hotel, custmize date, add review and Cancel boking.
        </p>
        <h3 className="text-white font-bold text-2xl mb-3">Features</h3>
        <ul className="text-gray-300 list-inside list-disc mb-8">
          <li>Eye catchy Design </li>
          <li>Authentication</li>
          <li>Functionalities</li>
          <li>Animation</li>
          <li>Secure Api</li>
          <li>Responsive</li>
        </ul>
        <ul className="flex gap-2 text-2xl text-yellow-20 font-semibold">
          <div className="flex gap-3 items-center text-[#bfbecb]">
            <p className="text-white font-base text-2xl">Links</p>
            <div className="h-[1px] w-20 bg-[#bfbecb] mt-1"></div>
            <FaAngleRight className="-ml-6 mt-1 text-base" />
          </div>
          <li className="pr-2 mr-2 border-r border-gray-500 underline">
            <a
              href="https://hotelhube.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </li>
          <li className="pr-2 mr-2 border-r border-gray-500 underline">
            <a
              href="https://github.com/aminurjs/HotelHub-client"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </li>
        </ul>
      </div>
      <img
        className="w-full md:w-1/2 lg:w-2/5"
        src="https://i.ibb.co/rsVhptD/hotelhub.jpg"
        alt="hotelhub"
      />
    </div>
  );
};

export default PinnedProject;
