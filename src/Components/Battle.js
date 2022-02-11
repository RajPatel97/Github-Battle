import React, { useState } from "react";
import { FaUserFriends, FaFighterJet, FaTrophy } from "react-icons/fa";
import propTypes from "prop-types";

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">INSTRUCTIONS</h1>
      <ol className="container-small grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends
            className="bg-light"
            color="rgb(255,191,166)"
            size={140}
          />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ol>
    </div>
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
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      <div className="row player-inputs">
        <input
          type="text"
          id="username"
          className="input-light"
          placeholder="github-username"
          autoComplete="off"
          value={username}
          onChange={handleChange}
        />
        <button className="btn dark-btn" type="submit" disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
};

PlayerInput.Prototypes = {
  onSubmit: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

const Battle = () => {
  return (
    <React.Fragment>
      <Instructions />
      <PlayerInput
        label={"lable!"}
        onSubmit={(value) => {
          console.log("value!", value);
        }}
      />
    </React.Fragment>
  );
};

export default Battle;
