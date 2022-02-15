import propTypes from "prop-types";
import ThemeContext from "../Contexts/theme";

const Card = ({ header, subheader, avatar, href, name, children }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className="header-lg center-text">{header}</h4>
          <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
          {subheader && <h4 className="center-text">{subheader}</h4>}
          <h2 className="center-text">
            <a className="link" href={href}>
              {name}
            </a>
          </h2>
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

Card.propTypes = {
  header: propTypes.string.isRequired,
  subheader: propTypes.string,
  avatar: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default Card;
