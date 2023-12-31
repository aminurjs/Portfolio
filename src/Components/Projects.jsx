import Card from "./Card";
// import PinnedProject from "./PinnedProject";

const projects = [
  {
    name: "HotelHub",
    subtitle: "Generic Hotel Booking Website",
    description:
      "This site is a React single-page e-commerce web application. It is built with react-router, Firebase, JWS Authentication, express js, and MongoDB.",
    liveLink: "https://hotelhube.web.app/",
    codeLink: "https://github.com/aminurjs/HotelHub-client",
    image: "https://i.ibb.co/yhKcKck/hotelhube-web-app.jpg",
  },
  {
    name: "TechFirmIT",
    subtitle: "Tech Services Web App",
    description:
      "TechFirmIT - Tech Services Company Web App, According to the role of the user, the dashboard will show the data, one can load only as much data as it is allowed. According to the end roll, different data will be shown. Added payment method, only HR can make payment, and a user can pay salary only once in a month.",
    liveLink: "https://techfirmit.web.app/",
    codeLink: "https://github.com/aminurjs/techfirmit-client",
    image: "https://i.ibb.co/yn2b1pV/techfirmit-web-app.jpg",
  },
  {
    name: "Automotive React",
    subtitle: "Car Dealer Web Shop",
    description:
      "Automotive - A car brands web-shop. This site is a React single-page e-commerce web application. It is built with react-router, Firebase Authentication, express js and MongoDB. Dark and light mode features are also added to this project. First, the theme will be selected according to the theme of the device, then the user can change it if he wants.",
    liveLink: "https://automotivereact.web.app/",
    codeLink: "https://github.com/aminurjs/Automotive-client",
    image: "https://i.ibb.co/nMSZ7PN/automotivereact-web-app.jpg",
  },
  {
    name: "Tech Events Expo",
    subtitle: "Event management web app",
    description:
      "Tech Events Expo - Event management web app. User can easily register with email password and Google account. And can easily login anytime. While scrolling this site, the data will be shown with a beautiful animation.",
    liveLink: "https://techeventexpo.web.app/",
    codeLink: "https://github.com/aminurjs/Tech-Events",
    image: "https://i.ibb.co/gTyMqfH/techeventexpo-web-app.jpg",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#252839]">
      <div className="max-w-7xl mx-auto py-20 px-5">
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-semibold mb-2 text-center">
          RECENT PROJECTS
        </h2>
        <h3 className="text-yellow-20 tracking-[3px] uppercase mb-3  text-center">
          My Achievements and Contributions in Diverse Projects
        </h3>
        <div className="w-20 h-1.5 bg-yellow-20 my-5 mx-auto"></div>

        {/* <PinnedProject /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, i) => (
            <Card key={i} card={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
