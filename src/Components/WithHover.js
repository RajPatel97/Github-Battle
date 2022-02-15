import { useState } from "react";

const WithHover = (Component) => {
  const HoverComponent = (props) => {
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
        <Component hovering={hovering} {...props} />
      </div>
    );
  };

  return HoverComponent;
};

export default WithHover;
