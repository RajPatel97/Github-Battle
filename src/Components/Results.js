import { useEffect } from "react";
import { battle } from "../utils/api";

const Results = (props) => {
  useEffect(() => {
    battle([props.playerOne, props.playerTwo]).then((players) => {
      console.log("data: ", players);
    });
  });

  return (
    <div>
      Results
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Results;
