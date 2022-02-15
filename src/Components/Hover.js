import { useState } from "react";

const Hover = ({ children }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setHovering(true);
      }}
      onMouseOut={() => {
        setHovering(false);
      }}
    >
      {children(hovering)}
    </div>
  );
};

export default Hover;
