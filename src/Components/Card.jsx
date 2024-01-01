import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div className="bg-transparent border border-gray-700 rounded-md">
      <a
        href={card.liveLink}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundImage: `url(${card.image})` }}
        className="block rounded-t w-full h-[450px] bg-cover bg-no-repeat bg-top hover:bg-bottom duration-[5s] ease-in-out"
      ></a>
      <div className="p-5">
        <div className="pb-3 mb-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-white mb-1">
            {card.name}
          </h2>
          <p className="text-gray-200 flex items-center gap-2">
            {card.subtitle}
          </p>
        </div>
        <p className="text-gray-200 mb-4">
          {card?.description?.length > 120
            ? `${card.description.slice(0, 120)} ...`
            : card.description}
        </p>
        <a href={card.liveLink} target="_blank" rel="noreferrer">
          <button className="py-2.5 px-5 mr-3 mt-3 text-white bg-yellow-20 rounded active:scale-95">
            Live Site
          </button>
        </a>
        <a href={card.codeLink} target="_blank" rel="noreferrer">
          <button className="py-2 px-5  text-yellow-20 bg-transparent border border-yellow-20 rounded active:scale-95">
            Code Link
          </button>
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
