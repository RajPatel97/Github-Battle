import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";

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
  const [repos, setRepos] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          setRepos(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
          console.log("new data has been added to repos");
          console.log(repos);
        })
        .catch(() => {
          console.warn("Error Fetching", error);
          setError("there was an error fetching the repos");
          console.log(error);
        });
    } //if statement
    // fetchPopularRepos(selectedLanguage)
    //   .then((repos) => {
    //     setRepos(repos);
    //   })
    //   .catch(() => {
    //     console.warn("Error Fetching", error);
    //     setError("there was an error fetching the repos");
    //     console.log(error);
    //   });
  }, [selectedLanguage]);

  const isLoading = () => {
    return !repos[selectedLanguage] && error === null;

    // return repos === null && error === null;
  };

  return (
    <React.Fragment>
      <LanguagesNav
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      {/* {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {repos[selectedLanguage] && (
        <p>{JSON.stringify(repos[selectedLanguage], null, 5)}</p>
      )} */}
      {repos && <p>{JSON.stringify(repos, null, 5)}</p>}
    </React.Fragment>
  );
};
export default Popular;
