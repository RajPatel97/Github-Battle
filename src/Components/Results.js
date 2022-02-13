import { useEffect, useState } from "react";
import { battle } from "../utils/api";
import Card from "./Card";
import {
  FaCompass,
  FaBriefcase,
  FaUsers,
  FaUserFriends,
  FaCode,
  FaUser,
} from "react-icons/fa";
import propTypes from "prop-types";
import react from "react";

const ProfileList = ({ profile }) => {
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239, 115, 115)" size={22} />
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <FaCompass color="rgb(144, 115, 255)" size={22} />
          {profile.location}
        </li>
      )}
      {profile.company && (
        <li>
          <FaBriefcase color="#795548" size={22} />
          {profile.company}
        </li>
      )}
      <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {profile.following.toLocaleString()} following
      </li>
    </ul>
  );
};

ProfileList.propTypes = {
  profile: propTypes.object.isRequired,
};

const Results = ({ playerOne, playerTwo, onReset }) => {
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    battle([playerOne, playerTwo])
      .then((players) => {
        // console.log("data: ", players);
        setWinner(players[0]);
        setLoser(players[1]);
        setError(null);
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  });

  if (loading === true) {
    return <p>...Loading</p>;
  }

  if (error) {
    return <p className="center-text error">{error}</p>;
  }

  return (
    <react.Fragment>
      <div className="grid space-around container-sm">
        <Card
          header={winner.score === loser.score ? "Tie" : "Winner"}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>

        <Card
          header={winner.score === loser.score ? "Tie" : "Winner"}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          href={loser.profile.html_url}
          name={loser.profile.login}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <button className="btn dark-btn btn-space" onClick={onReset}>
        Reset
      </button>
    </react.Fragment>
  );
};

Results.prototype = {
  playerOne: propTypes.string.isRequired,
  playerTwo: propTypes.string.isRequired,
  onReset: propTypes.func.isRequired,
};

export default Results;
