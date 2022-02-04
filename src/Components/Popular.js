import React, { useState } from "react";
import propTypes from "prop-types";

const LanguagesNav = ({ selectedLanguage, setSelectedLanguage }) => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            onClick={() => setSelectedLanguage(language)}
            style={
              language === selectedLanguage
                ? { color: "rgb(187, 46, 31)" }
                : null
            }
            className="btn-clear nav-link"
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
};

LanguagesNav.Proptype = {
  selectedLanguage: propTypes.string.isRequired,
  setSelectedLanguage: propTypes.string.isRequired,
};

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  return (
    <React.Fragment>
      <LanguagesNav
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </React.Fragment>
  );
};
export default Popular;
