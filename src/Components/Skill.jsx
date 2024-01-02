import PropTypes from "prop-types";
const Skill = ({ img, duration, text }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <div className=" flex items-center gap-5">
          <img className="w-10" src={img} alt="" />
          <p className="text-2xl font-medium text-white">{text}</p>
        </div>
        <p className="text-2xl font-medium text-white">{duration}</p>
      </div>
      <div className="bg-gray-700 rounded-full w-full h-3">
        <div
          style={{
            width: duration,
          }}
          className="bg-yellow-20 h-3 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default Skill;
Skill.propTypes = {
  img: PropTypes.string,
  duration: PropTypes.string,
  text: PropTypes.string,
};
