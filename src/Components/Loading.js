import { useEffect, useState } from "react";
import { Component } from "react/cjs/react.production.min";
import propTypes from "prop-types";

const Loading = ({ text, speed }) => {
  const [content, setContent] = useState(text);
  const styles = {
    content: {
      fontSize: "35px",
      position: "absolute",
      left: "0",
      right: "0",
      marginTop: "20px",
      textAlign: "center",
    },
  };

  const timer = () => {
    window.setInterval(() => {
      content === text + "..." ? setContent("Loading") : setContent(text + ".");
    }, speed);
  };

  useEffect(() => {
    timer();
    console.log("here");
  }, [content]);

  return <p style={styles.content}>{content}</p>;
};

Loading.propTypes = {
  text: propTypes.string.isRequired,
  speed: propTypes.number.isRequired,
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300,
};

export default Loading;
