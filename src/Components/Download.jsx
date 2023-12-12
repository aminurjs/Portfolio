import { FaDownload } from "react-icons/fa6";

const Download = () => {
  return (
    <button className="py-2 px-5 ml-5 font-medium bg-yellow-20 mr-5 rounded flex gap-3 items-center">
      Resume <FaDownload />
    </button>
  );
};

export default Download;
