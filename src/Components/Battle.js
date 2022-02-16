import React, { useState } from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
} from "react-icons/fa";
import propTypes from "prop-types";

import Results from "./Results";
import ThemeContext from "../Contexts/theme";

const Instructions = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="instructions-container">
          <h1 className="center-text header-lg">INSTRUCTIONS</h1>
          <ol className="container-small grid center-text battle-instructions">
            <li>
              <h3 className="header-sm">Enter two Github users</h3>
              <FaUserFriends
                className={`bg-${theme}`}
                color="rgb(255,191,166)"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">Battle</h3>
              <FaFighterJet
                className={`bg-${theme}`}
                color="#727272"
                size={140}
              />
            </li>
            <li>
              <h3 className="header-sm">See the winners</h3>
              <FaTrophy
                className={`bg-${theme}`}
                color="rgb(255, 215, 0)"
                size={140}
              />
            </li>
          </ol>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

const PlayerInput = ({ onSubmit, label }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //onSubmit(username);//i think this is going to need to be changed
    onSubmit(username);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="username" className="player-label">
            {label}
          </label>
          <div className="row player-inputs">
            <input
              type="text"
              id="username"
              className={`input-${theme}`}
              placeholder="github-username"
              autoComplete="off"
              value={username}
              onChange={handleChange}
            />
            <button
              className={`btn ${theme === "dark" ? "light-btn" : "dark-btn"}`}
              type="submit"
              disabled={!username}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </ThemeContext.Consumer>
  );
};

PlayerInput.prototypes = {
  onSubmit: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

const PlayerPreview = ({ username, onReset, label }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="column player">
          <h3 className="player-label">{label}</h3>
          <div className={`row  bg-${theme}`}>
            <div className="player-info">
              <img
                className="avatar-small"
                src={`https://github.com/${username}.png?size=200`}
                alt={`Avatar for ${username}`}
              />
              <a href={`https://github.com/${username}`} className="link">
                {username}
              </a>
            </div>
            <button className="btn-clear flex-center" onClick={onReset}>
              <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
            </button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
PlayerPreview.propTypes = {
  username: propTypes.string.isRequired,
  onReset: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

const Battle = () => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [battle, setBattle] = useState(false);

  if (battle === true) {
    return (
      <Results
        playerOne={playerOne}
        playerTwo={playerTwo}
        onReset={() => {
          setBattle(false);
          setPlayerOne(null);
          setPlayerTwo(null);
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <Instructions />

      <div className="players-container">
        <h1 className="center-text header-lg">Players</h1>
        <div className="row space-around">
          {playerOne === null ? (
            <PlayerInput
              label={"Player One"}
              onSubmit={(player) => setPlayerOne(player)}
            />
          ) : (
            <PlayerPreview
              username={playerOne}
              label={"Player One"}
              onReset={() => setPlayerOne(null)}
            />
          )}

          {playerTwo === null ? (
            <PlayerInput
              label={"Player Two"}
              onSubmit={(player) => setPlayerTwo(player)}
            />
          ) : (
            <PlayerPreview
              username={playerTwo}
              label={"Player Two"}
              onReset={() => setPlayerTwo(null)}
            />
          )}
        </div>
        {playerOne && playerTwo && (
          <button
            className=" btn dark-btn btn-space"
            onClick={(e) => {
              e.preventDefault();
              setBattle(true);
            }}
          >
            Battle
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Battle;
