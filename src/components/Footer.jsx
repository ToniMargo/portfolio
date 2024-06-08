import PropTypes from "prop-types";
import { NAV_LINKS } from "@/app/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-48 flex flex-col md:flex-row justify-center md:justify-between items-center p-6 border-t border-gray-200">
      <ul className="flex gap-6 p-0 m-auto md:m-0 list-none">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-gray-600 no-underline hover:text-gray-800">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-gray-500 text-sm">© {year} John Doe. All rights reserved</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [],
};

export default Footer;
