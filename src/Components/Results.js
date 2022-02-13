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

const Results = (props) => {
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    battle([props.playerOne, props.playerTwo])
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
    <div className="grid space-around container-sm">
      <Card
        header={winner.score === loser.score ? "Tie" : "Winner"}
        subheader={`Score: ${winner.score.toLocaleString()}`}
        avatar={winner.profile.avatar_url}
        href={winner.profile.html_url}
        name={winner.profile.login}
      >
        <ul className="card-list">
          <li>
            <FaUser color="rgb(239, 115, 115)" size={22} />
            {winner.profile.name}
          </li>
          {winner.profile.location && (
            <li>
              <FaCompass color="rgb(144, 115, 255)" size={22} />
              {winner.profile.location}
            </li>
          )}
          {winner.profile.company && (
            <li>
              <FaBriefcase color="#795548" size={22} />
              {winner.profile.company}
            </li>
          )}
          <li>
            <FaUsers color="rgb(129, 195, 245)" size={22} />
            {winner.profile.followers.toLocaleString()} followers
          </li>
          <li>
            <FaUserFriends color="rgb(64, 183, 95)" size={22} />
            {winner.profile.following.toLocaleString()} following
          </li>
        </ul>
      </Card>

      <Card
        header={winner.score === loser.score ? "Tie" : "Winner"}
        subheader={`Score: ${loser.score.toLocaleString()}`}
        avatar={loser.profile.avatar_url}
        href={loser.profile.html_url}
        name={loser.profile.login}
      >
        <ul className="card-list">
          <li>
            <FaUser color="rgb(239, 115, 115)" size={22} />
            {loser.profile.name}
          </li>
          {loser.profile.location && (
            <li>
              <FaCompass color="rgb(144, 115, 255)" size={22} />
              {loser.profile.location}
            </li>
          )}
          {loser.profile.company && (
            <li>
              <FaBriefcase color="#795548" size={22} />
              {loser.profile.company}
            </li>
          )}
          <li>
            <FaUsers color="rgb(129, 195, 245)" size={22} />
            {loser.profile.followers.toLocaleString()} followers
          </li>
          <li>
            <FaUserFriends color="rgb(64, 183, 95)" size={22} />
            {loser.profile.following.toLocaleString()} following
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Results;
