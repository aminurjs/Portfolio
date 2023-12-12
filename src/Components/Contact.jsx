const Contact = () => {
  return (
    <div className="bg-[#292C3F] py-5 ">
      <div className="max-w-7xl mx-auto p-10 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-lg border border-gray-800">
        <div className="md:w-2/3 mx-auto text-center">
          <div className="p-8 rounded-lg shadow ">
            <h2 className="text-white font-semibold text-3xl md:text-4xl mb-3">
              Contact now
            </h2>
            <div className="w-20 h-1.5 bg-yellow-20 mb-5 mx-auto"></div>
            <p className="text-gray-200 text-lg mb-5">
              Get latest updates, deals, and exclusive offers Every time.
            </p>
            <form className="space-y-4">
              <input
                className="px-5 py-2 outline-none border border-gray-500 bg-gray-700 text-white rounded-md w-full md:w-[calc(50%-10px)] mr-5"
                type="text"
                name=""
                id=""
                placeholder="Full Name"
              />
              <input
                className="px-5 py-2 outline-none border border-gray-500 bg-gray-700 text-white rounded-md w-full md:w-[calc(50%-10px)]"
                type="email"
                name=""
                id=""
                placeholder="Your Email"
              />
              <input
                className="px-5 py-2 outline-none border border-gray-500 bg-gray-700 text-white rounded-md w-full"
                type="text"
                name=""
                id=""
                placeholder="Subject"
              />
              <textarea
                className="px-5 py-2 outline-none border border-gray-500 bg-gray-700 text-white rounded-md w-full"
                name=""
                rows="5"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-20 rounded px-10 py-3 text-white uppercase font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
