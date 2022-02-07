import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

const LanguagesNav = ({ selectedLanguage, setSelectedLanguage }) => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  useEffect(() => {
    //fetch data here
    console.log("first render");
  });

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
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularRepos(selectedLanguage)
      .then((repos) => {
        setRepos(repos);
      })
      .catch(() => {
        console.warn("Error Fetching", error);
        setError("there was an error fetching the repos");
        console.log(error);
      });
  }, [selectedLanguage]);

  const isLoading = () => {
    return repos === null && error === null;
  };

  return (
    <React.Fragment>
      <LanguagesNav
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      {isLoading() && <p>Loading</p>}
      {error && <p>{error}</p>}
      {repos && <p>{JSON.stringify(repos, null, 5)}</p>}
    </React.Fragment>
  );
};
export default Popular;
