import { FaDownload } from "react-icons/fa6";

const Download = () => {
  const handleDownload = () => {
    const pdfUrl = "./Aminur_Rahman.pdf";
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "Aminur Rahman.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <button
      onClick={handleDownload}
      className="py-2 px-5 ml-5 font-medium bg-yellow-20 mr-5 rounded flex gap-3 items-center"
    >
      Resume <FaDownload />
    </button>
  );
};

export default Download;
