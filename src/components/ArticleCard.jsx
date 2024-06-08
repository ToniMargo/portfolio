import PropTypes from "prop-types";

const ArticleCard = ({ date, title, content, link }) => {
  return (
    <article className="flex flex-col p-6 w-auto ">
      <div className="article-card-header">
        <time className="text-sm uppercase text-gray-400 border-l-4 border-gray-200 pl-2">{date}</time>
        <h2 className="text-2xl capitalize my-4 font-bold">{title}</h2>
      </div>
      <p className="text-base text-zinc-600 leading-6 mb-4">{content}</p>
      <a href={link} className="flex text-base font-bold text-teal-500 ">
        Read article <img src="/chevron-right.svg" alt="right-arrow" className="w-2 ml-3 align-middle" />
      </a>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ArticleCard.defaultProps = {
  link: "#",
};

export default ArticleCard;
