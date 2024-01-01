import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending ...");
    setSending(true);
    const from_name = e.target.from_name.value;
    const from_mail = e.target.from_mail.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const mail = { from_name, from_mail, subject, message };
    emailjs
      .send("service_v7n9kzi", "template_z3jp8fz", mail, "8ppC_6AD-Bsu1J-jo")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSending(false);
          toast.success("Send Success", { id: toastId });
        },
        (error) => {
          console.log("FAILED...", error);
          setSending(false);
          toast.error("Send Failed", { id: toastId });
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-[#292C3F] py-5 ">
      <Toaster
        toastOptions={{
          style: {
            fontWeight: "600",
          },
        }}
      />
      <div className="max-w-7xl mx-auto py-10 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-lg border border-gray-800">
        <div className="md:w-2/3 mx-auto text-center">
          <div className="p-8 rounded-lg shadow ">
            <h2 className="text-white font-semibold text-3xl md:text-4xl mb-3">
              Contact now
            </h2>
            <div className="w-20 h-1.5 bg-yellow-20 mb-5 mx-auto"></div>
            <p className="text-gray-200 text-lg mb-5">
              Get latest updates, deals, and exclusive offers Every time.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="px-5 py-3 outline-none border border-gray-500 bg-transparent text-white rounded-md w-full md:w-[calc(50%-10px)] mr-5"
                type="text"
                name="from_name"
                required
                placeholder="Full Name"
              />
              <input
                className="px-5 py-3 outline-none border border-gray-500 bg-transparent text-white rounded-md w-full md:w-[calc(50%-10px)]"
                type="email"
                name="from_mail"
                required
                placeholder="Your Email"
              />
              <input
                className="px-5 py-3 outline-none border border-gray-500 bg-transparent text-white rounded-md w-full"
                type="text"
                name="subject"
                required
                placeholder="Subject"
              />
              <textarea
                className="px-5 py-3 outline-none border border-gray-500 bg-transparent text-white rounded-md w-full"
                name="message"
                rows="5"
                placeholder="Message ..."
              ></textarea>
              {!sending ? (
                <button
                  type="submit"
                  className="bg-yellow-20 rounded w-80 py-3 text-white uppercase font-medium"
                >
                  Send Message
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  style={{ opacity: 0.6, cursor: "not-allowed" }}
                  className="bg-white text-black rounded w-80 py-3 uppercase font-medium"
                >
                  Sending ...
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
