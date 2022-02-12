import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from "react-icons/fa";

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

const ReposGrid = ({ repos }) => {
  return (
    <ul className="grid space-around">
      {repos.map((repo, index) => {
        const { name, owner, html_url, stargazers_count, forks, open_issues } =
          repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url} className="card bg-light">
            <h4 className="header-lg center-text">#{(index = 1)}</h4>
            <img
              className="avatar"
              src={avatar_url}
              alt={`Avatar for ${login}`}
            />
            <h2 className="center-text">
              <a href={html_url} className="link">
                {login}
              </a>
            </h2>
            <ul className="card-list">
              {" "}
              <li>
                <FaUser color="rgb(255,191,116)" size={22} />
                <a href={`https://github.com/${login}`}>{login}</a>
              </li>
              <li>
                <FaStar color="rgb(255, 215, 0)" size={22} />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                {open_issues.toLocaleString()} open issues
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [repos, setRepos] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          setRepos({ ...repos, [selectedLanguage]: data }); //fixed caching issue
          console.log("new data has been added to repos");
          console.log(repos);
        })
        .catch(() => {
          console.warn("Error Fetching", error);
          setError("there was an error fetching the repos");
          console.log(error);
        });
    }
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
      {isLoading() && <p>... Loading</p>}
      {error && <p className="center-text error">{error}</p>}
      {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
    </React.Fragment>
  );
};
export default Popular;
