import propTypes from "prop-types";
import { useState } from "react";

const styles = {
  container: {
    position: "relative",
    display: "flex",
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
  },
};

const Tooltip = ({ text, children }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      style={styles.container}
    >
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  text: propTypes.string.isRequired,
};

export default Tooltip;
