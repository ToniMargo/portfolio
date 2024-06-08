import PropTypes from "prop-types";

const UsesCard = ({ title, description }) => {
  return (
    <div className="uses-card flex flex-col w-full max-w-420 mb-12">
      <h2 className="font-bold">{title}</h2>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UsesCard;
