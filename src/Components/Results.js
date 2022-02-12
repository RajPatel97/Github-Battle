import { useEffect, useState } from "react";
import { battle } from "../utils/api";

const Results = (props) => {
  const [state, setState] = useState({});
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
        setState({ winner, loser, error, loading });
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
        setState({ error, loading });
      });
  });

  return (
    <div>
      Results
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Results;
