const shapeDividerStyles = {
  shapedividersCom5981: {
    overflow: "hidden",
    position: "relative",
  },
  shapedividersCom5981Before: {
    content: "''",
    fontFamily: "shape divider from ShapeDividers.com",
    position: "absolute",
    bottom: "-1px",
    left: "-1px",
    right: "-1px",
    top: "-1px",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 90px",
    backgroundPosition: "50% 0%",
    backgroundImage: `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%252839c2"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%252839c2"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%252839c2"/></svg>')`,
  },
  media768px: {
    shapedividersCom5981Before: {
      backgroundSize: "100% 90px",
      backgroundPosition: "50% 0%",
    },
  },
  media1025px: {
    shapedividersCom5981Before: {
      bottom: "-0.1vw",
      left: "-0.1vw",
      right: "-0.1vw",
      top: "-0.1vw",
      backgroundSize: "100% 208px",
      backgroundPosition: "50% 100%",
      backgroundImage: `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.67c-3.07-.55-9.27.41-16.15 0-6.87-.4-13.74-.58-19.13.1v.4h35.28z" fill="%23f2b632"/><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" opacity=".5" fill="%23f2b632"/><path d="M35.28.31c-2.57.84-7.68.3-11.8.43-4.1.12-6.85.61-9.57.28C11.18.69 8.3-.16 5.3.02 2.3.22.57.85 0 .87v1.2h35.28z" opacity=".5" fill="%23f2b632"/></svg>')`,
    },
  },
  media2100px: {
    shapedividersCom5981Before: {
      backgroundSize: "100% calc(2vw + 208px)",
    },
  },
};

// Usage in a React component
const Experience = () => {
  return (
    <div className="relative">
      <div style={shapeDividerStyles.shapedividersCom5981}>
        <div
          className=" bg-yellow-20"
          style={shapeDividerStyles.shapedividersCom5981Before}
        ></div>
        {/* Your component content */}
        <div className="h-48 md:h-72"></div>
      </div>
      <div className="absolute top-[40%] left-0 w-full">
        <div className="max-w-7xl mx-auto flex justify-evenly items-end md:items-center">
          <h1 className="text-white font-bold text-2xl md:text-5xl lg:text-7xl text-center">
            20+{" "}
            <span className="text-lg md:text-3xl font-medium block">
              Project Complete
            </span>
          </h1>
          <h1 className="text-white font-bold text-2xl md:text-5xl lg:text-7xl text-center">
            250+{" "}
            <span className="text-lg md:text-3xl font-medium block">
              Contribution
            </span>
          </h1>
          <h1 className="text-white font-bold text-2xl md:text-5xl lg:text-7xl text-center">
            1+{" "}
            <span className="text-lg md:text-3xl font-medium block">
              Years of Experience
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
